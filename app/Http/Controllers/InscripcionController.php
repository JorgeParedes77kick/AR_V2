<?php

namespace App\Http\Controllers;

use App\Helpers\AsistenciaHelper;
use App\Helpers\Debug;
use App\Helpers\GlobalApp;
use App\Helpers\InscripcionHelper;
use App\Helpers\RolHelper;
use App\Http\Requests\InscripcionRequest;
use App\Models\Asistencia;
use App\Models\Curriculum;
use App\Models\EstadoInscripcion;
use App\Models\GrupoPequeno;
use App\Models\Inscripcion;
use App\Models\Temporada;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class InscripcionController extends Controller {
    public function index() {

        $temporadas = Temporada::select(['id', 'prefijo'])->orderBy('prefijo', 'desc')->get();
        $curriculums = Curriculum::with(
            'ciclos:id,nombre,curriculum_id',
            'ciclos.gruposPequenos:id,ciclo_id,dia_curso,hora_inicio,hora_fin,temporada_id',
            // 'ciclos.gruposPequenos.lideres',
        )
            ->select(['id', 'nombre'])->get();
        $dias = collect(GlobalApp::$DIAS);
        $estados = EstadoInscripcion::whereNotIn('id', [InscripcionHelper::$LIDER, InscripcionHelper::$MONITOR])->get();

        return Inertia::render('Inscripcion/administrativo', [
            'temporadas' => $temporadas,
            'curriculums' => $curriculums,
            'dias' => $dias,
            'estados' => $estados,
        ]);
    }

    /**
     * @param  string  $email
     */
    public function findEmail(string $email) {
        $inscripciones = collect();
        $message = "No existen inscripciones en el sistema para este email";
        try {
            $usuario = Usuario::whereEmail($email)->whereHas('roles', function ($q) {$q->where('roles.id', RolHelper::$ALUMNO);})->with('persona')->firstOrFail();

            $inscripciones = Inscripcion::where('rol_id', RolHelper::$ALUMNO)
                ->where('usuario_id', $usuario->id)
                ->with(
                    ['grupoPequeno.ciclo:id,nombre,curriculum_id',
                        'grupoPequeno.ciclo.curriculum:id,nombre',
                        'grupoPequeno.temporada:id,prefijo',
                        'estadoInscripcion:id,estado',
                        'grupoPequeno.lideres',
                    ])
                ->get();

            if (count($inscripciones) == 0) {
                return response()->json(["message" => $message, "inscripciones" => $inscripciones, 'usuario' => $usuario], 400);
            } else {
                $message = "Inscripciones encontradas";
            }
        } catch (\Throwable $th) {
            return response()->json(["message" => $message, "inscripciones" => $inscripciones, 'usuario' => null], 400);
        }
        return response()->json(["message" => $message, "inscripciones" => $inscripciones, 'usuario' => $usuario], 200);

    }

    public function findGrupos(Request $request) {
        // $grupos_pequenos = collect();
        $inputs = $request->all();
        Debug::info($inputs);

        $grupos_pequenos = GrupoPequeno::with('lideres')
            ->where('temporada_id', $request->temporada_id)
            ->where('ciclo_id', $request->ciclo_id)
            ->when($request->filled('dia_curso'), function ($q) use ($request) {$q->where('dia_curso', $request->dia_curso);})
            ->when($request->filled('hora_inicio'), function ($q) use ($request) {$q->where('hora_inicio', $request->hora_inicio);})
            ->when($request->filled('hora_fin'), function ($q) use ($request) {$q->where('hora_fin', $request->hora_fin);})
            ->get();

        $message = $grupos_pequenos->isEmpty()
        ? "No existen inscripciones en el sistema para este email"
        : "Grupos pequeños encontrados";

        return response()->json(["message" => $message, "grupos_pequenos" => $grupos_pequenos], 200);

    }

    public function store(InscripcionRequest $request) {

        // $id = $request->input('id', null);
        // $inputs = $request->except('id');
        DB::beginTransaction();
        try {
            $data = $request->except('id');
            $inscripcion = $request->filled('id')
            ? Inscripcion::findOrFail($request->id)->update($data)
            : Inscripcion::create($data);

            if (!$request->filled('id')) {
                $temporada = Temporada::whereId($request->temporada_id)->activo()->with('semanas')->first();
                if ($temporada) {
                    $asistencias = $temporada->semanas->map(function ($semana) use ($inscripcion) {
                        return [
                            'inscripcion_id' => $inscripcion->id,
                            'semana_id' => $semana->id,
                            'estado_asistencia_id' => AsistenciaHelper::$INSCRITO,
                        ];
                    })->toArray();
                    Asistencia::insert($asistencias); // Inserción masiva para mejor rendimiento
                }
            }
            DB::commit();
            // Retornar respuesta de éxito
            $message = $request->filled('id')
            ? "¡La Inscripción fue actualizada exitosamente!"
            : "¡La Inscripción fue creada exitosamente!";

            return response()->json(["message" => $message], 200);

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                "message" => $th->getMessage(),
                "server" => "¡No se pudo realizar la Inscripción, intente más tarde!",
            ], 500);
        }
    }
}
