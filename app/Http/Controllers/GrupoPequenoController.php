<?php

namespace App\Http\Controllers;

use App\Models\Ciclo;
use App\Models\Curriculum;
use App\Models\GrupoPequeno;
use App\Models\Temporada;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GrupoPequenoController extends Controller {
    /**
     * Display a listing of the resource.
     *
     */
    public function index() {

        $gruposPequenos = GrupoPequeno::with('ciclo.curriculum', 'temporada', 'inscripciones.usuario.persona')
            ->with('inscripciones', function ($query) {
                $query->whereIn('rol_id', [3, 4]);
            })
            ->orderBy('temporada_id', 'desc')->get();
        // Agrupar los usuarios por su rol (líderes y monitores)
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

        $temporadas = Temporada::select('prefijo')->get();
        $curriculums = Curriculum::activo()->select('nombre')->get();
        $ciclos = Ciclo::whereHas('curriculum', function ($q) {$q->activo();})->select('nombre')
            ->distinct()->get();
        $dias = collect(['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo', 'none']);

        return Inertia::render('GruposPequenos/index', [
            'gruposPequenos' => $gruposPequenos,
            'temporadas' => $temporadas,
            'curriculums' => $curriculums,
            'ciclos' => $ciclos,
            'dias' => $dias,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show($id) {
        $grupoPequeno = GrupoPequeno::where('id', $id)->with(
            'ciclo.curriculum', 'temporada',
            'inscripciones.usuario.persona',
            'inscripciones.estadoInscripcion',
        )->orderBy('temporada_id', 'desc')->first();
        // Agrupar los usuarios por su rol (líderes y monitores)
        $lideres = collect();
        $monitores = collect();
        $alumnos = collect();
        foreach ($grupoPequeno->inscripciones as $inscripcion) {
            if ($inscripcion->rol_id === 3) {
                $lideres->push($inscripcion->usuario);
            } elseif ($inscripcion->rol_id === 4) {
                $monitores->push($inscripcion->usuario);

            } elseif ($inscripcion->rol_id === 5) {
                $usuario = $inscripcion->usuario;
                unset($inscripcion->usuario);
                $usuario->inscripcion = $inscripcion;
                $alumnos->push($usuario);
            }
        }

        // Asignar líderes y monitores al grupoPequeno
        $grupoPequeno->alumnos = $alumnos;
        $grupoPequeno->lideres = $lideres;
        $grupoPequeno->monitores = $monitores;
        unset($grupoPequeno->inscripciones);

        return Inertia::render('GruposPequenos/show', [
            'action' => 'show',
            'grupoPequeno' => $grupoPequeno,
        ]);
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
