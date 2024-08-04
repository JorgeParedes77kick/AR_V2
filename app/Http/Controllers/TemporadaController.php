<?php

namespace App\Http\Controllers;

use App\Helpers\Debug;
use App\Http\Requests\TemporadaResquest;
use App\Models\Temporada;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TemporadaController extends Controller {
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request) {
        $status = session('status');
        $message = session('message');
        Debug::info($status);
        Debug::info($message);
        Debug::info($request->session()->all());

        $temporadas = Temporada::orderBy('prefijo', 'desc')->get();
        // foreach ($temporadas as $i => $temp) {
        //     // $temp->idCrypt = Crypt::encrypt($temp->id);
        //     $temp->idCrypt = Str::slug($temp->id, '-');
        // }
        return Inertia::render('Temporadas/index', [
            'temporadas' => $temporadas,
            'status' => $status,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create() {
        return Inertia::render('Temporadas/form', [
            'action' => 'create',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(TemporadaResquest $request) {
        $input = $request->all();
        $temporada = Temporada::create($input);

        if ($temporada) {
            return response()->json(["message" => "La Temporada fue creada exitosamente!"], 200);
        } else {
            return response()->json(["message" => [], 'server' => '¡La Temporada no pudo ser creada, intente más tarde!'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show($id) {
        $temporada = Temporada::find($id);
        return Inertia::render('Temporadas/form', [
            'action' => 'show',
            'temporada' => $temporada,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     */
    public function edit($id) {
        $temporada = Temporada::find($id);
        return Inertia::render('Temporadas/form', [
            'action' => 'edit',
            'temporada' => $temporada,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     */
    public function update(TemporadaResquest $request, $id) {

        $input = $request->all();
        $temporada = Temporada::find($id);
        $state = $temporada->update($input);

        if ($state) {
            return response()->json(["message" => "La Temporada fue actualizada exitosamente!"], 200);
        } else {
            return response()->json(["message" => [], 'server' => '¡La Temporada no pudo ser actualizada, intente más tarde!'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy($id) {
        $temporada = Temporada::find($id);
        $state = $temporada->delete();

        if ($state) {
            return response()->json(["message" => "La Temporada fue eliminada exitosamente!"], 200);
        } else {
            return response()->json(["message" => [], 'server' => '¡La Temporada no pudo ser eliminada, intente más tarde!'], 500);
        }
    }
}
