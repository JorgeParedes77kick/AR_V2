<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller {
    public function index() {
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

        // Renderizar la vista de Inertia
        return Inertia::render('Home', [
            'rutas' => $rutasFiltradas->values(), // Pasar las rutas filtradas a la vista
        ]);
    }
}
