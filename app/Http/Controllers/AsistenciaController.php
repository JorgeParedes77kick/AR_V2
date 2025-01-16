<?php
namespace App\Http\Controllers;

use App\Helpers\AsistenciaHelper;
use App\Helpers\RolHelper;
use App\Models\Curriculum;
use App\Models\EstadoAsistencia;
use App\Models\GrupoPequeno;
use App\Models\Inscripcion;
use App\Models\Semana;
use App\Models\Temporada;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AsistenciaController extends Controller {
    private $temporadasId = [];
    public function __construct() {
        $this->temporadasId = Temporada::activo()->pluck('id');
    }
    public function index() {
        $temporadas = Temporada::activo()->get();

        $rol         = session()->get('rol_id');
        $curriculums = collect();
        $user        = Auth::user();
        if ($rol === RolHelper::$COORDINADOR) {

            $curriculums = Curriculum::activo()
                ->whereHas('ciclos.grupospequenos', function ($query) {
                    $query->whereIn('temporada_id', $this->temporadasId);
                })->whereHas('usuarios', function ($q) use ($user) {
                $q->where('usuarios.id', $user->id);
            })->get();

        } else if ($rol === RolHelper::$MONITOR) {
            $curriculums = Curriculum::activo()
                ->whereHas('ciclos.grupospequenos', function ($query) use ($user) {
                    $query->whereIn('temporada_id', $this->temporadasId)
                        ->whereHas('monitores', function ($q) use ($user) {
                            $q->where('usuarios.id', $user->id);
                        });
                })->get();
        } else if ($rol === RolHelper::$LIDER) {
            $curriculums = Curriculum::activo()
                ->whereHas('ciclos.grupospequenos', function ($query) use ($user) {
                    $query->whereIn('temporada_id', $this->temporadasId)
                        ->whereHas('lideres', function ($q) use ($user) {
                            $q->where('usuarios.id', $user->id);
                        });
                })->get();
        } else {
            $curriculums = Curriculum::activo()
                ->whereHas('ciclos.grupospequenos', function ($query) {
                    $query->whereIn('temporada_id', $this->temporadasId);
                })->get();
        }
        // Obtener los curriculums con los ciclos y contar los alumnos en grupos pequeños
        return Inertia::render('Asistencia/index', [
            'temporadas'  => $temporadas,
            'curriculums' => $curriculums,
        ]);
    }

    public function show($idCryptCurriculum) {
        $curriculumId = base64_decode($idCryptCurriculum);
        $curriculum   = Curriculum::find($curriculumId);
        // $usuario = Auth::user();
        $semanas               = Semana::whereIn('temporada_id', $this->temporadasId)->orderBy('temporada_id')->orderBy('id')->get();
        $gruposAsistencias     = $this->asistenciaByGrupo($curriculumId);
        $ciclosAsistencias     = $this->asistenciaByCiclo($curriculumId, $gruposAsistencias);
        $curriculumAsistencias = $this->asistenciaByCurriculum($curriculumId, $gruposAsistencias);

        return Inertia::render('Asistencia/show', [
            'curriculumAsistencias' => $curriculumAsistencias,
            'ciclosAsistencias'     => $ciclosAsistencias,
            'gruposAsistencias'     => $gruposAsistencias,
            'semanas'               => $semanas,
            'curriculum'            => $curriculum,
        ]);
    }
    private function asistenciaByGrupo($curriculumId) {
        $grupos          = $this->basicQueryGrupos($curriculumId);
        $grupos_pequenos = $grupos->groupBy('id')->map(function ($grupos) {
            return $this->mapSemanas($grupos);
        })->values();
        return $grupos_pequenos;
    }
    private function asistenciaByCiclo($curriculumId, $grupos_pequenos = null) {
        $ciclosAsistencias = collect();
        if ($grupos_pequenos) {
            $ciclosAsistencias = $grupos_pequenos->groupBy('ciclo_id')->map(function ($grupos) {
                return $this->forSemanasSum($grupos);
            })->values();

        } else {
            $grupos            = $this->basicQueryGrupos($curriculumId);
            $ciclosAsistencias = $grupos->groupBy('ciclo_id')->map(function ($grupos) {
                return $this->mapSemanas($grupos);
            })->values();

        }
        return $ciclosAsistencias;
    }
    private function asistenciaByCurriculum($curriculumId, $grupos_pequenos = null) {
        $curriculumAsistencias = collect();

        if ($grupos_pequenos) {
            $curriculumAsistencias = collect([$this->forSemanasSum($grupos_pequenos)]);
        } else {
            $grupos                = $this->basicQueryGrupos($curriculumId);
            $curriculumAsistencias = collect([$this->mapSemanas($grupos)]);
        }

        return $curriculumAsistencias;
    }

    private function basicQueryGrupos($curriculumId) {
        $user = Auth::user();
        $rol  = session()->get('rol_id');

        $grupos = GrupoPequeno::
            whereIn('grupo_pequenos.temporada_id', $this->temporadasId)
            ->whereIn('s.temporada_id', $this->temporadasId)
            ->join('ciclos as c', 'grupo_pequenos.ciclo_id', '=', 'c.id')
            ->join('curriculums as c2', 'c.curriculum_id', '=', 'c2.id')
            ->join('inscripciones as i', 'i.grupo_pequeno_id', '=', 'grupo_pequenos.id')
            ->join('asistencias as a', 'a.inscripcion_id', '=', 'i.id')
            ->join('estados_asistencias as ea', 'a.estado_asistencia_id', '=', 'ea.id')
            ->join('semanas as s', 'a.semana_id', '=', 's.id')
            ->where('c2.id', $curriculumId)
            ->select(
                DB::raw('count(*) as total_asistencias'),
                's.id as semana_id',
                'ea.id as estado_asistencia_id',
                'ea.estado',
                'grupo_pequenos.id as id',
                'grupo_pequenos.ciclo_id as ciclo_id',
                'c.nombre as nombre_ciclo',
                'c2.nombre  as nombre_curriculum',
            )
            ->with('lideres');

        if ($rol === RolHelper::$MONITOR) {
            $grupos = $grupos->whereHas('monitores', function ($q) use ($user) {
                $q->where('usuarios.id', $user->id);
            });
        } else if ($rol === RolHelper::$LIDER) {
            $grupos = $grupos->whereHas('lideres', function ($q) use ($user) {
                $q->where('usuarios.id', $user->id);
            });
        }
        $grupos = $grupos->groupBy('s.id')->groupBy('ea.id')->groupBy('grupo_pequenos.id')
            ->orderBy('grupo_pequenos.id')->orderBy('s.id')
            ->get();

        return $grupos;
    }
    private function mapSemanas($grupos) {
        $semanas = $grupos->groupBy('semana_id')->map(function ($semanas) {
            $resultados = ['total' => 0, 'ausentes' => 0, 'inscritos' => 0, 'presentes' => 0, 'no_aplica' => 0, 'recuperados' => 0];
            foreach ($semanas as $asistencia) {
                $resultados['total'] += $asistencia->total_asistencias;

                switch ($asistencia->estado_asistencia_id) {
                case AsistenciaHelper::$AUSENTE:
                    $resultados['ausentes'] += $asistencia->total_asistencias;
                    break;
                case AsistenciaHelper::$INSCRITO:
                    $resultados['inscritos'] += $asistencia->total_asistencias;
                    break;
                case AsistenciaHelper::$PRESENTE:
                    $resultados['presentes'] += $asistencia->total_asistencias;
                    break;
                case AsistenciaHelper::$NO_APLICA:
                    $resultados['no_aplica'] += $asistencia->total_asistencias;
                    break;
                case AsistenciaHelper::$RECUPERADO:
                    $resultados['recuperados'] += $asistencia->total_asistencias;
                    break;
                }
            }
            return (object) $resultados;
        });
        return (object) [
            "grupo_pequenos_id" => $grupos[0]->id,
            "ciclo_id"          => $grupos[0]->ciclo_id,
            "nombre_ciclo"      => $grupos[0]->nombre_ciclo,
            "nombre_curriculum" => $grupos[0]->nombre_curriculum,
            "lideres"           => $grupos[0]->lideres,
            "semanas"           => $semanas->values(),
            "total_inscritos"   => $semanas->values()->first()->total,
        ];

    }
    private function forSemanasSum($grupos) {
        $countSemanas = $grupos[0]->semanas->count();
        $semanas      = collect([]);
        for ($i = 0; $i < $countSemanas; $i++) {
            $total = $grupos->sum(function ($grupo) use ($i) {return $grupo->semanas[$i]->total;});
            $ausentes = $grupos->sum(function ($grupo) use ($i) {return $grupo->semanas[$i]->ausentes;});
            $inscritos = $grupos->sum(function ($grupo) use ($i) {return $grupo->semanas[$i]->inscritos;});
            $presentes = $grupos->sum(function ($grupo) use ($i) {return $grupo->semanas[$i]->presentes;});
            $no_aplica = $grupos->sum(function ($grupo) use ($i) {return $grupo->semanas[$i]->no_aplica;});
            $recuperados = $grupos->sum(function ($grupo) use ($i) {return $grupo->semanas[$i]->recuperados;});
            $semanas->push((object) [
                "total"     => $total, "ausentes"      => $ausentes, "inscritos"    => $inscritos,
                "presentes" => $presentes, "no_aplica" => $no_aplica, "recuperados" => $recuperados,
            ]);
        }
        return (object) [
            "grupo_pequenos_id" => $grupos[0]->grupo_pequenos_id,
            "ciclo_id"          => $grupos[0]->ciclo_id,
            "nombre_ciclo"      => $grupos[0]->nombre_ciclo,
            "nombre_curriculum" => $grupos[0]->nombre_curriculum,
            "lideres"           => $grupos[0]->lideres,
            "semanas"           => $semanas->values(),
            "total_inscritos"   => $semanas->values()->first()->total,
        ];
    }
    public function misSalonesAsistencia(int $idGrupo) {
        $usuario = Auth::user();
        return $this->getAsistenciaGrupo($idGrupo, $usuario->id);
    }
    public function getAsistenciaGrupo($idGrupo, $liderId = null) {
        $temporadasId  = Temporada::activo()->pluck('id')->values();
        $inscripciones = Inscripcion::
            where('grupo_pequeno_id', $idGrupo)
            ->when($liderId, function ($q) use ($liderId) {
                $q->whereHas('grupoPequeno.lideres', function ($q) use ($liderId) {
                    $q->where('usuarios.id', $liderId);
                });
            })
            ->whereHas('grupoPequeno', function ($q) use ($temporadasId) {$q->whereIn('temporada_id', $temporadasId);})
            ->alumno()
            ->with('asistencias', 'asistencias.estadoAsistencia', 'usuario')
            ->get();
        $semanas           = GrupoPequeno::whereId($idGrupo)->first()->temporada->semanas;
        $estadosAsistencia = EstadoAsistencia::all();
        return response()->json([
            'inscripciones' => $inscripciones,
            'semanas'       => $semanas,
            'estados'       => $estadosAsistencia,
        ], 200);
    }

}
