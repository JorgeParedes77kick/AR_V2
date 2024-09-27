<?php

namespace App\Http\Controllers;

use App\Helpers\Debug;
use App\Helpers\GlobalHelper;
use App\Helpers\InscripcionHelper;
use App\Helpers\RolHelper;
use App\Models\Asistencia;
use App\Models\Curriculum;
use App\Models\GlobalProject;
use App\Models\GrupoPequeno;
use App\Models\Inscripcion;
use App\Models\Restriccion;
use App\Models\Semana;
use App\Models\Temporada;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller {
    public function index() {

        // * Esto es para pre saber las rutas basicas previo a indexacion al navbar
        // Obtener las rutas como colección
        $rutas = collect(Route::getRoutes());

        // Filtrar las rutas
        $rutasFiltradas = $rutas->filter(function ($ruta) {
            return strpos($ruta->getName(), 'index');
        })->map(function ($ruta) {
            return [
                'method' => $ruta->methods()[0], // Cambiar getMethods a methods
                'URI' => $ruta->uri(), // Cambiar getUri a uri
                'name' => $ruta->getName(),
                'action' => $ruta->getActionName(),
            ];
        });

        // Obtener las temporadas activas y sus IDs
        $temporadas = Temporada::activo()->get();
        // $temporadasId = $temporadas->pluck('id');

        $persona = Auth::user()->persona;
        // Obtener los curriculums con los ciclos y contar los alumnos en grupos pequeños
        $curriculums = Curriculum::activo()->with(['restricciones'])
            ->where(function ($Q) use ($persona) {
                $Q->Validacion($persona)->orWhereDoesntHave('restricciones');
            })
            ->get();

        Debug::info($curriculums->toArray());

        // Renderizar la vista de Inertia
        return Inertia::render('Home/index', [
            'rutas' => $rutasFiltradas->values(), // Pasar las rutas filtradas a la vista
            'temporadas' => $temporadas,
            'curriculums' => $curriculums,
        ]);
    }

    public function curriculum(String $curriculumName) {
        $curriculumName = strtolower($curriculumName);
        $curriculums = Curriculum::activo()->pluck('nombre')->map(function ($x) {
            return strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $x));
        })->values();

        if (!$curriculums->contains($curriculumName)) {
            return redirect()->route('home')->with(['error' => 'Curriculum no disponible o no existe!']);
        }

        $temporadas = Temporada::activo()->get();
        $temporadasId = $temporadas->pluck('id');
        $parejasId = Restriccion::parejas()->pluck('curriculum_id')->toArray();
        Debug::infoJson($parejasId);

        $curriculum = Curriculum::
            whereRaw("LOWER(REGEXP_REPLACE(nombre, '[^a-zA-Z0-9]', '')) = ?", [$curriculumName])
            ->with('ciclos', function ($query) use ($temporadasId) {$query->withHorarios($temporadasId);})
        // ->selectRaw()
            ->first();
        $curriculum->parejas = in_array($curriculum->id, $parejasId);

        if (!$curriculum) {return redirect()->route('home')->with(['error' => 'Curriculum no disponible o no existe!']);}

        // manejar el caso en que se encuentra un currículum activo con ese nombre
        Debug::infoJson($curriculum);
        return Inertia::render('Home/inscripcion', [
            'curriculum' => $curriculum,
            'temporadas' => $temporadas,

        ]);
    }
    // public function curriculum2(Int $id) {
    //     $curriculum = Curriculum::find($id);
    //     if (!$curriculum->activo) {
    //         return redirect()->route('home')->with([
    //             'error' => 'Curriculum no disponible o no existe!',
    //         ]);
    //     }
    //     return Inertia::render('Home/inscripcion', [
    //         'curriculum' => $curriculum,
    //     ]);
    // }
    public function inscribir(Request $request) {
        $usuario = Auth::user();

        // Obtener los parámetros necesarios del request
        $temporada_id = $request->input('temporada_id');
        $ciclo_id = $request->input('ciclo_id');
        $dia_curso = $request->input('dia_curso');
        $hora_inicio = $request->input('hora_inicio');
        $hora_fin = $request->input('hora_fin');

        // Obtener las inscripciones del usuario en la temporada actual
        $inscripcionesUsuario = Inscripcion::where('usuario_id', $usuario->id)
            ->whereHas('grupoPequeno', function ($query) use ($temporada_id) {
                $query->where('temporada_id', $temporada_id);
            })
            ->count();

        // Obtener los valores globales para límites de inscripciones
        $globales = GlobalProject::whereIn('id', [GlobalHelper::$GRUPOS_POR_USUARIO, GlobalHelper::$INSCRIPCION_POR_GRUPO])
            ->get()
            ->pluck('castValor', 'id');

        $inscripcionesMaximas = $globales[GlobalHelper::$GRUPOS_POR_USUARIO] ?? 0;
        $inscripcionesEnGrupo = $globales[GlobalHelper::$INSCRIPCION_POR_GRUPO] ?? 0;

        // Verificar si el usuario ya alcanzó el número máximo de inscripciones permitidas
        if ($inscripcionesUsuario >= $inscripcionesMaximas) {
            return response()->json(['server' => 'Has alcanzado el límite de inscripciones permitidas.'], 400);
        }

        // Buscar los grupos disponibles que coincidan con los parámetros
        $grupos = GrupoPequeno::where('temporada_id', $temporada_id)
            ->where('ciclo_id', $ciclo_id)
            ->where('dia_curso', $dia_curso)
            ->where('hora_inicio', $hora_inicio)
            ->where('hora_fin', $hora_fin)
            ->activo()
            ->withCount('alumnos')
            ->having('alumnos_count', '<', $inscripcionesEnGrupo)
            ->first();

        // Si no hay grupos disponibles, retornar una respuesta
        if (!$grupos) {
            return response()->json(['server' => 'No hay inscripciones disponibles en este grupo.'], 400);
        }

// Obtener las semanas de la temporada (solo los IDs)
        $semanas = Semana::where('temporada_id', $temporada_id)->pluck('id');
        // Iniciar transacción
        try {
            DB::beginTransaction();

            // Crear la inscripción
            $inscripcion = Inscripcion::create([
                'usuario_id' => $usuario->id,
                'rol_id' => RolHelper::$ALUMNO,
                'grupo_pequeno_id' => $grupos->id,
                'estado_inscripcion_id' => InscripcionHelper::$INSCRITO,
                'info_adicional' => '',
            ]);

            // Sincronizar las semanas con la inscripción, si existen semanas
            $semanas->each(function ($semana_id) use ($inscripcion) {
                Asistencia::create(['semana_id' => $semana_id, 'inscripcion_id' => $inscripcion->id, 'estado_asistencia_id' => InscripcionHelper::$INSCRITO]);
            });
            //Si ahora llega al maximo;
            if ($grupos->alumnos_count == $inscripcionesEnGrupo - 1) {
                $grupos->update(['activo_inscripcion' => false]);
            }

            // DB::commit();
            return response()->json(['message' => 'Inscripción realizada con éxito.'], 200);

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'server' => '¡Error al realizar la inscripción, intente más tarde!',
                'message' => $th->getMessage()], 500);
        }

    }

    public function desincribir(int $id) {

        $inscripcion = Inscripcion::find($id);
        if (!$inscripcion) {
            return response()->json(['server' => 'No existe esta inscripción'], 400);
        }
        try {
            DB::beginTransaction();
            $inscripcion->asistencias()->delete();
            $state = $inscripcion->delete();
            DB::commit();
            if ($state) {
                return response()->json(["message" => "La inscripción fue eliminada exitosamente!"], 200);
            } else {
                return response()->json(["message" => '', 'server' => '¡La inscripción no pudo ser eliminada, intente más tarde!'], 400);
            }
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'server' => '¡La inscripción no pudo ser eliminada, intente más tarde!',
                'message' => $th->getMessage()], 500);
        }

    }
}
