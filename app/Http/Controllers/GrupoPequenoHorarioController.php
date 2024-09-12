<?php

namespace App\Http\Controllers;

use App\Helpers\Debug;
use App\Models\Ciclo;
use App\Models\Curriculum;
use App\Models\GrupoPequeno;
use App\Models\Inscripcion;
use App\Models\Temporada;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GrupoPequenoHorarioController extends Controller {
    /**
     * Display a listing of the resource.
     *
     */
    public function index() {
        $gruposPequenos = GrupoPequeno::with('ciclo.curriculum', 'temporada', 'inscripciones.usuario.persona')
            ->whereHas('temporada', function ($query) {$query->where('activo', true);})
            ->with('inscripciones', function ($query) {
                $query->whereIn('rol_id', [3, 4]);
            })
            ->orderBy('temporada_id', 'desc')->get();
        $gruposPequenos->each(function ($grupo) {
            $lideres = collect();
            $monitores = collect();

            foreach ($grupo->inscripciones as $inscripcion) {
                if ($inscripcion->rol_id === 3) {
                    $lideres->push($inscripcion->usuario);
                } elseif ($inscripcion->rol_id === 4) {
                    $monitores->push($inscripcion->usuario);
                }
            }

            // Asignar líderes y monitores al grupo
            $grupo->lideres = $lideres;
            $grupo->monitores = $monitores;
        });

        $temporadas = Temporada::where('activo', true)->select('prefijo')->get();
        $curriculums = Curriculum::activo()->select('nombre')->get();
        $ciclos = Ciclo::whereHas('curriculum', function ($q) {$q->activo();})->select('nombre')
            ->distinct()->get();
        $dias = collect(['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo', 'none']);

        return Inertia::render('GruposPequenos/indexHorario', [
            'gruposPequenos' => $gruposPequenos,
            'temporadas' => $temporadas,
            'curriculums' => $curriculums,
            'ciclos' => $ciclos,
            'dias' => $dias,
            'action' => 'create',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create() {
        $temporadas = Temporada::where('activo', true)->select('prefijo')->get();
        $curriculums = Curriculum::activo()->select(['id', 'nombre'])->with('ciclos:id,nombre,curriculum_id')->get();
        // $ciclos = Ciclo::whereHas('curriculum', function ($q) {$q->activo();})->select('nombre')
        //     ->distinct()->get();
        $dias = collect(['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo', 'none']);
        $lideres = Usuario::select(['usuarios.id', 'usuarios.nick_name', 'usuarios.email', 'personas.id as persona_id', 'personas.nombre', 'personas.apellido',
            DB::raw("CONCAT(personas.nombre, ' ', personas.apellido, ' - ', usuarios.email) as fullNombre"),
        ])->join('personas', 'usuarios.persona_id', '=', 'personas.id')->whereHas('roles', function ($q) {$q->where('roles.id', 3);})->get();

        $monitores = Usuario::select(['usuarios.id', 'usuarios.nick_name', 'usuarios.email', 'personas.id as persona_id', 'personas.nombre', 'personas.apellido',
            DB::raw("CONCAT(personas.nombre, ' ', personas.apellido, ' - ', usuarios.email) as fullNombre"),
        ])
            ->join('personas', 'usuarios.persona_id', '=', 'personas.id')
            ->whereHas('roles', function ($q) {$q->where('roles.id', 4);})->get();

        return Inertia::render('GruposPequenos/form', [
            'action' => 'create',
            'temporadas' => $temporadas,
            'curriculums' => $curriculums,
            'dias' => $dias,
            'lideres' => $lideres,
            'monitores' => $monitores,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request) {
        $lideres = $request->lideres;
        $monitores = $request->monitores;
        unset($request->lideres);
        unset($request->monitores);
        $inputs = $request->all();
        Debug::info($lideres);
        Debug::info($monitores);
        Debug::info($inputs);
        try {
            DB::beginTransaction();
            $grupopequeno = GrupoPequeno::create($inputs);
            $inscripciones = [];
            foreach ($lideres as $key => $lider) {
                $inscripcion = new Inscripcion([
                    'usuario_id' => $lider->id,
                    'rol_id' => 4,
                    'grupo_pequeno_id' => $grupopequeno->id,
                    'estado_inscripcion_id' => 5,
                    'info_adicional' => 'Lider',
                ]);
                array_push($inscripciones, $inscripcion);
                # code...
            }
            foreach ($monitores as $key => $monitor) {
                $inscripcion = new Inscripcion([
                    'usuario_id' => $monitor->id,
                    'rol_id' => 3,
                    'grupo_pequeno_id' => $grupopequeno->id,
                    'estado_inscripcion_id' => 6,
                    'info_adicional' => 'Lider',
                ]);
                array_push($inscripciones, $inscripcion);

            }
            $states = $grupopequeno->inscripciones()->createMany($inscripciones);

            Debug::info($states);
            if ($states) {
                return response()->json(["message" => "El horario Grupo pequeño fue creado exitosamente, con sus lideres y monitores!"], 200);
            } else {
                return response()->json(["message" => "", 'server' => '¡El horario Grupo pequeño no pudo ser creado, intente más tarde!'], 400);
            }

        } catch (\Throwable $th) {
            //throw $th;
            DB::rollBack();
            return response()->json(["message" => $th->getMessage(), 'server' => '¡El horario Grupo pequeño no pudo ser creado, intente más tarde!'], 500);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     */
    public function update(Request $request, $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy($id) {
        //
    }
}
