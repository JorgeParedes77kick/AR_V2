<?php

namespace App\Http\Controllers;

use App\Helpers\Debug;
use App\Models\Curriculum;
use App\Models\Temporada;
use Illuminate\Support\Facades\Auth;
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
        $temporadasId = $temporadas->pluck('id');

        $persona = Auth::user()->persona;
        // Obtener los curriculums con los ciclos y contar los alumnos en grupos pequeños
        $curriculums = Curriculum::activo()
            ->whereHas('ciclos.grupospequenos', function ($query) use ($temporadasId) {
                $query->whereIn('temporada_id', $temporadasId);
            })
            ->with(['restricciones'])
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

}
