<?php

namespace App\Http\Controllers\Alumno;

use App\Helpers\Debug;
use App\Helpers\GlobalHelper;
use App\Helpers\InscripcionHelper;
use App\Helpers\RolHelper;
use App\Http\Controllers\Controller;
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

class InscripcionController extends Controller {

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

        $curriculum = Curriculum::
            whereRaw("LOWER(REGEXP_REPLACE(nombre, '[^a-zA-Z0-9]', '')) = ?", [$curriculumName])
            ->with('ciclos', function ($query) use ($temporadasId) {$query->withHorarios($temporadasId);})
            ->whereHas('ciclos.grupospequenos', function ($query) use ($temporadasId) {
                $query->whereIn('temporada_id', $temporadasId);
            })
            ->first();

        if (!$curriculum) {return redirect()->route('home')->with(['error' => 'Curriculum no disponible o no existe!']);}

        $parejasId = Restriccion::parejas()->pluck('curriculum_id')->toArray();
        $curriculum->parejas = in_array($curriculum->id, $parejasId);

        // manejar el caso en que se encuentra un currículum activo con ese nombre
        Debug::infoJson($curriculum);
        return Inertia::render('Alumno/inscripcion', [
            'curriculum' => $curriculum,
            'temporadas' => $temporadas,

        ]);
    }

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
            })->where('rol_id', RolHelper::$ALUMNO)
            ->count();

        // Obtener los valores globales para límites de inscripciones
        $globales = GlobalProject::whereIn('id', [GlobalHelper::$GRUPOS_POR_USUARIO, GlobalHelper::$INSCRIPCION_POR_GRUPO])
            ->get()
            ->pluck('castValor', 'id');

        $inscripcionesMaximas = $globales[GlobalHelper::$GRUPOS_POR_USUARIO] ?? 0;
        $inscripcionesEnGrupo = $globales[GlobalHelper::$INSCRIPCION_POR_GRUPO] ?? 0;
        // Debug::info($inscripcionesMaximas);
        // Debug::info($inscripcionesEnGrupo);
        // Debug::info($inscripcionesUsuario);

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

            DB::commit();
            return response()->json(['message' => 'Inscripción realizada con éxito.'], 200);

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'server' => '¡Error al realizar la inscripción, intente más tarde!',
                'message' => $th->getMessage()], 500);
        }

    }

    public function cursos() {
        $usuario = Auth::user();
        $temporadasId = Temporada::activo()->pluck('id')->toArray();

        $inscripciones = Inscripcion::where('usuario_id', $usuario->id)->where('rol_id', RolHelper::$ALUMNO)
            ->whereHas('grupoPequeno', function ($query) use ($temporadasId) {
                $query->whereIn('temporada_id', $temporadasId);
            })
            ->with('grupoPequeno.ciclo:id,nombre,curriculum_id',
                'grupoPequeno.ciclo.curriculum:id,nombre',
                'grupoPequeno.temporada:id,prefijo',
                'estadoInscripcion:id,estado'
            )
            ->get();

        return Inertia::render('Alumno/misCursos', [
            'inscripciones' => $inscripciones,
        ]);
    }

    public function desinscribir(int $id) {

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
