<?php

namespace app\Http\Controllers;

use App\Helpers\Debug;
use App\Helpers\RolHelper;
use App\Models\EstadoCivil;
use App\Models\Genero;
use App\Models\Inscripcion;
use App\Models\Nacionalidad;
use App\Models\Region;
use App\Models\Rol;
use App\Models\Temporada;
use App\Models\Usuario;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController {
    private $temporadasId = null;
    public function __construct() {
        $this->temporadasId = Temporada::activo()->pluck('id')->values();
    }
    public function index() {

        $this->getTotalUsuarios();

        //Nuevos
        $id = $this->temporadasId->first();
        // $this->getUsuariosTemporadaNuevos($id);
        $data = $this->getUsuariosTemporada($id);
        return Inertia::render('Home/dashboard', [
            'data' => $data,
        ]);
    }
    private function getTotalUsuarios() {
        $totalUsuarios = Usuario::count();
        Debug::infoJson($totalUsuarios);
        $usuariosGeneros = Genero::withCount('personas')->get();
        Debug::infoJson($usuariosGeneros);
        $usuariosRoles = Rol::withCount('usuarios')->get();
        Debug::infoJson($usuariosRoles);
        $usuariosNacionalidad = Nacionalidad::withCount('personas')->whereHas('personas')->get();
        Debug::infoJson($usuariosNacionalidad);
        $usuariosCivil = EstadoCivil::withCount('personas')->whereHas('personas')->get();
        Debug::infoJson($usuariosCivil);
        $usuariosRegion = Region::withCount('personas')->whereHas('personas')->get();
        Debug::infoJson($usuariosRegion);
    }
    private function getUsuariosTemporadaNuevos($temporada_id) {
        $temporada = Temporada::find($temporada_id);

        $totalUsuarios = Usuario::whereBetween('created_at', [$temporada->fecha_inicio, $temporada->fecha_cierre])->count();
        // $totalUsuarios = Usuario::whereBetween('created_at', [$temporada->inscripcion_inicio, $temporada->fecha_cierre])->count();
        Debug::infoJson($totalUsuarios);
        $usuariosGeneros = Genero::withCount('personas')->whereHas('personas', function ($q) use ($temporada) {
            $q->whereBetween('created_at', [$temporada->fecha_inicio, $temporada->fecha_cierre]);
        })->get();
        Debug::infoJson($usuariosGeneros);
        $usuariosRoles = Rol::withCount('usuarios')->get();
        Debug::infoJson($usuariosRoles);
        $usuariosNacionalidad = Nacionalidad::withCount('personas')
            ->whereHas('personas', function ($q) use ($temporada) {
                $q->whereBetween('created_at', [$temporada->fecha_inicio, $temporada->fecha_cierre]);
            })->get();
        Debug::infoJson($usuariosNacionalidad);
        $usuariosCivil = EstadoCivil::withCount('personas')
            ->whereHas('personas', function ($q) use ($temporada) {
                $q->whereBetween('created_at', [$temporada->fecha_inicio, $temporada->fecha_cierre]);
            })->get();
        Debug::infoJson($usuariosCivil);
        $usuariosRegion = Region::withCount('personas')
            ->whereHas('personas', function ($q) use ($temporada) {
                $q->whereBetween('created_at', [$temporada->fecha_inicio, $temporada->fecha_cierre]);
            })->get();
        Debug::infoJson($usuariosRegion);
    }
    private function getUsuariosTemporada($temporada_id) {
        $temporada = Temporada::find($temporada_id);
        $alumnosRegionPais = $this->getAlumnosByRegionPais($temporada_id);
        // Debug::infoJson($usuariosPais->sum());
        return (object) array_merge($alumnosRegionPais);
    }

    private function getAlumnosByRegionPais($temporada_id) {
        // Subconsulta para el total de usuarios
        $totalUsuariosSubquery = DB::raw('(select count(distinct i2.usuario_id)
                                  from inscripciones i2
                                  join grupo_pequenos gp2 on i2.grupo_pequeno_id = gp2.id
                                  where i2.rol_id = ' . RolHelper::$ALUMNO . ' and gp2.temporada_id = ' . $temporada_id . ') as total_usuarios');
        $distinctUsuariosSubquery = DB::raw('count(distinct inscripciones.usuario_id) as cantidad_usuarios');

        // Base de la consulta
        $baseQuery = Inscripcion::join('grupo_pequenos as gp', 'inscripciones.grupo_pequeno_id', '=', 'gp.id')
            ->join('usuarios as u', 'inscripciones.usuario_id', '=', 'u.id')
            ->join('personas as p', 'u.persona_id', '=', 'p.id')
            ->join('regiones as r', 'p.region_id', '=', 'r.id')
            ->join('paises as p2', 'r.pais_id', '=', 'p2.id')
            ->where('inscripciones.rol_id', RolHelper::$ALUMNO)
            ->where('gp.temporada_id', $temporada_id);

        // Usuarios por región y país
        $usuariosRegion = $baseQuery->clone()
            ->select('r.nombre as region_nombre', 'p2.nombre as pais_nombre', $distinctUsuariosSubquery, $totalUsuariosSubquery)
            ->groupBy('r.nombre', 'p2.nombre')
            ->get();
        // Usuarios por país
        $usuariosPais = $baseQuery->clone()
            ->select('p2.nombre as pais_nombre', $distinctUsuariosSubquery, $totalUsuariosSubquery)
            ->groupBy('p2.nombre')
            ->get();
        return [
            'usuariosPais' => $usuariosPais,
            'usuariosRegion' => $usuariosRegion,
        ];
    }
    private function getAlumnosByCicloCurriculum($temporada_id) {
        // Subconsulta para el total de usuarios
        $totalUsuariosSubquery = DB::raw('(select count(distinct i2.usuario_id)
                                  from inscripciones i2
                                  join grupo_pequenos gp2 on i2.grupo_pequeno_id = gp2.id
                                  where i2.rol_id = ' . RolHelper::$ALUMNO . ' and gp2.temporada_id = ' . $temporada_id . ') as total_usuarios');
        $distinctUsuariosSubquery = DB::raw('count(distinct inscripciones.usuario_id) as cantidad_usuarios');

        // Base de la consulta
        $baseQuery = Inscripcion::join('grupo_pequenos as gp', 'inscripciones.grupo_pequeno_id', '=', 'gp.id')
            ->join('usuarios as u', 'inscripciones.usuario_id', '=', 'u.id')
            ->join('personas as p', 'u.persona_id', '=', 'p.id')
            ->join('regiones as r', 'p.region_id', '=', 'r.id')
            ->join('paises as p2', 'r.pais_id', '=', 'p2.id')
            ->where('inscripciones.rol_id', RolHelper::$ALUMNO)
            ->where('gp.temporada_id', $temporada_id);

        // Usuarios por región y país
        $usuariosRegion = $baseQuery->clone()
            ->select('r.nombre as region_nombre', 'p2.nombre as pais_nombre', $distinctUsuariosSubquery, $totalUsuariosSubquery)
            ->groupBy('r.nombre', 'p2.nombre')
            ->get();
        // Usuarios por país
        $usuariosPais = $baseQuery->clone()
            ->select('p2.nombre as pais_nombre', $distinctUsuariosSubquery, $totalUsuariosSubquery)
            ->groupBy('p2.nombre')
            ->get();
        return [
            'usuariosPais' => $usuariosPais,
            'usuariosRegion' => $usuariosRegion,
        ];
    }
}
