<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

/**
 * Rutas Inicial
 */
Route::get('/', function () {
    return Inertia::render('Login/LoginPage');
});
/**
 * Rutas Registro Usuario
 */
Route::get('/gender/list', [App\Http\Controllers\GeneroController::class, 'list'])->name('gender.list');
Route::get('/civilStatus/list', [App\Http\Controllers\EstadoCivilController::class, 'list'])->name('civilStatus.list');
Route::get('/nationality/list', [App\Http\Controllers\NacionalidadController::class, 'list'])->name('nationality.list');
Route::get('/country/list', [App\Http\Controllers\PaisController::class, 'list'])->name('country.list');
Route::get('/region/list/{country}', [App\Http\Controllers\RegionController::class, 'list'])->name('region.list');
Route::post('/persona/store', [App\Http\Controllers\PersonaController::class, 'store'])->name('persona.store');
Route::delete('persona/{persona_id}/delete', [App\Http\Controllers\PersonaController::class, 'destroy'])->name('persona.destroy');
Route::post('/user/store', [App\Http\Controllers\UsuarioController::class, 'store'])->name('user.store');

/**
 * Rutas Usuario Autrizado
 */
Route::middleware(['auth'])->group(function () {

    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

});

/**
 * Rutas Usuario autorizado y rol Administrador
 */
Route::middleware(['auth', 'super.admin'])->group(function () {

    Route::resource('temporadas', App\Http\Controllers\TemporadaController::class);
    Route::resource('roles', App\Http\Controllers\RolController::class);
    Route::resource('estados-asistencia', App\Http\Controllers\EstadoAsistenciaController::class);
    Route::resource('estados-inscripcion', App\Http\Controllers\EstadoInscripcionController::class);
    Route::resource('curriculums', App\Http\Controllers\CurriculumController::class)->except(['update']);
    Route::post('curriculums/{curriculum}/update', [App\Http\Controllers\CurriculumController::class, 'update'])->name('curriculums.update');
    Route::resource('restricciones', App\Http\Controllers\RestriccionController::class);
    Route::resource('adicionales-curriculum', App\Http\Controllers\AdicionalController::class)->except(['update', 'delete']);
    Route::resource('ciclos', App\Http\Controllers\CicloController::class);
    Route::resource('recursos', App\Http\Controllers\RecursoController::class);
    Route::resource('usuarios-equipo', App\Http\Controllers\UsuarioRolesController::class)->except(['delete']);

});
