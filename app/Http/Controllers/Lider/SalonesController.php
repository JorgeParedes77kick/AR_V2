<?php

namespace App\Http\Controllers\Lider;

use App\Helpers\Debug;
use App\Http\Controllers\Controller;
use App\Models\Curriculum;
use App\Models\GrupoPequeno;
use App\Models\Temporada;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SalonesController extends Controller {

    public function index() {
        $temporadasId = Temporada::activo()->pluck('id')->toArray();
        $usuario = Auth::user();

        $curriculums = Curriculum::whereHas('ciclos.gruposPequenos', function ($query) use ($temporadasId, $usuario) {
            $query->whereIn('temporada_id', $temporadasId)
                ->whereHas('lideres', function ($query) use ($usuario) {
                    $query->where('usuarios.id', $usuario->id);
                })
            ;
        })->get();
        Debug::infoJson($curriculums);
        return Inertia::render('Lider/misSalones', [
            'curriculums' => $curriculums,
        ]);
    }

    public function curriculum(String $curriculumName) {
        $curriculumName = strtolower($curriculumName);
        $curriculums = Curriculum::activo()->pluck('nombre')->map(function ($x) {
            return strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $x));
        })->values();

        if (!$curriculums->contains($curriculumName)) {
            return redirect()->route('mis-salones')->with(['error' => 'Curriculum no disponible o no existe!']);
        }
        $usuario = Auth::user();
        $temporadasId = Temporada::activo()->pluck('id')->values();
        $curriculum = Curriculum::
            whereRaw("LOWER(REGEXP_REPLACE(nombre, '[^a-zA-Z0-9]', '')) = ?", [$curriculumName])
            ->whereHas('ciclos.grupospequenos', function ($query) use ($temporadasId, $usuario) {
                $query->whereIn('temporada_id', $temporadasId)
                    ->whereHas('lideres', function ($query) use ($usuario) {
                        $query->where('usuarios.id', $usuario->id);
                    });
            })->first();

        if (!$curriculum) {return redirect()->route('mis-salones')->with(['error' => 'Curriculum no disponible o no existe!']);}

        $grupospequenos = GrupoPequeno::whereIn('temporada_id', $temporadasId)
            ->whereHas('lideres', function ($query) use ($usuario) {
                $query->where('usuarios.id', $usuario->id);
            })
            ->whereHas('ciclo', function ($query) use ($curriculum) {
                $query->where('curriculum_id', $curriculum->id);
            })
            ->with('ciclo')->get();

        Debug::infoJson($curriculum);
        return Inertia::render('Lider/salonesCiclos', [
            'curriculum' => $curriculum,
            'grupospequenos' => $grupospequenos,
        ]);
    }
    public function alumnosGrupo(String $curriculumName, int $id) {
        $curriculumName = strtolower($curriculumName);
        $curriculums = Curriculum::activo()->pluck('nombre')->map(function ($x) {
            return strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $x));
        })->values();

        if (!$curriculums->contains($curriculumName)) {
            return redirect()->route('mis-salones')->with(['error' => 'Curriculum no disponible o no existe!']);
        }
        $usuario = Auth::user();
        $temporadasId = Temporada::activo()->pluck('id')->values();
        $grupopequeno = GrupoPequeno::whereId($id)
            ->with(
                'lideres', 'monitores',
                'inscripcionesAlumnos.usuario',
                'inscripcionesAlumnos.usuario.persona.region:id,nombre,pais_id',
                'inscripcionesAlumnos.usuario.persona.region.pais:id,nombre',
                'inscripcionesAlumnos.usuario.persona.nacionalidad:id,nombre',
                'inscripcionesAlumnos.usuario.persona.estadoCivil:id,estado',
                'inscripcionesAlumnos.estadoInscripcion',
                'temporada:id,prefijo',
                'ciclo:id,nombre,curriculum_id',
                'ciclo.curriculum:id,nombre'

            )
            ->whereIn('temporada_id', $temporadasId)
            ->whereHas('lideres', function ($query) use ($usuario) {$query->where('usuarios.id', $usuario->id);})
            ->whereHas('ciclo.curriculum', function ($query) use ($curriculumName) {
                $query->whereRaw("LOWER(REGEXP_REPLACE(curriculums.nombre, '[^a-zA-Z0-9]', '')) = ?", [$curriculumName]);
            })
            ->first();
        if (!$grupopequeno) {
            return redirect()
                ->route('mis-salones.curriculum', ['curriculum' => $curriculumName])
                ->with(['error' => 'Grupo pequeño no disponible o no existe!']);
        }
        $inscripciones = $grupopequeno->inscripcionesAlumnos;
        unset($grupopequeno->inscripcionesAlumnos);
        Debug::infoJson($grupopequeno);
        Debug::infoJson($inscripciones);

        return Inertia::render('Lider/alumnosGrupo', [
            'grupopequeno' => $grupopequeno,
            'inscripciones' => $inscripciones,
        ]);
    }
}
