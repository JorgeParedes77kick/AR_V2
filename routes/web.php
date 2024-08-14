<?php

use Illuminate\Support\Facades\Auth;
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

Route::get('/', function () {
    return Inertia::render('Login/LoginPage');
});

Route::post('auth.login', [App\Http\Controllers\Auth\LoginController::class, 'login']);

//Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('temporadas', App\Http\Controllers\TemporadaController::class);
Route::resource('roles', App\Http\Controllers\RolController::class);
Route::resource('estados-asistencia', App\Http\Controllers\EstadoAsistenciaController::class);
Route::resource('estados-inscripcion', App\Http\Controllers\EstadoInscripcionController::class);
Route::resource('curriculums', App\Http\Controllers\CurriculumController::class)->except(['update']);
Route::post('curriculums/{curriculum}/update', [App\Http\Controllers\CurriculumController::class, 'update'])->name('curriculums.update');
Route::resource('restricciones', App\Http\Controllers\RestriccionController::class);
