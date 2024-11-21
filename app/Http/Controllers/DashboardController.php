<?php

namespace app\Http\Controllers;

use App\Helpers\Debug;
use App\Helpers\RolHelper;
use App\Models\EstadoCivil;
use App\Models\Genero;
use App\Models\Nacionalidad;
use App\Models\Region;
use App\Models\Rol;
use App\Models\Temporada;
use App\Models\Usuario;
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
        $this->getUsuariosTemporada($id);
        return Inertia::render('Home/dashboard', [

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

        $usuariosPais = Region::

            withCount('personas')
            ->with('pais')
            ->whereHas('personas.user.inscripciones', function ($q) use ($temporada) {
                $q->where('inscripciones.rol_id', RolHelper::$ALUMNO)
                    ->whereHas('grupoPequeno', function ($q) use ($temporada) {
                        $q->temporada_id = $temporada->id;
                    });
            })->get();
        $usuariosPais = $usuariosPais->groupBy('pais.nombre')->map(function ($region) {
            return $region->sum('personas_count');
        });
        Debug::infoJson($usuariosPais);
        Debug::infoJson($usuariosPais->sum());

    }
}
