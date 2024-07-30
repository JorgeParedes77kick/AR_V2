<?php

namespace App\Http\Controllers;

use App\Helpers\Debug;
use App\Http\Requests\TemporadaResquest;
use App\Models\Temporada;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TemporadaController extends Controller {
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request) {
        $status = session('status');
        $mensaje = session('mensaje');
        Debug::info($status);
        Debug::info($mensaje);
        Debug::info($request->session()->all());

        $temporadas = Temporada::orderBy('prefijo', 'desc')->get();
        foreach ($temporadas as $i => $temp) {
            // $temp->idCrypt = Crypt::encrypt($temp->id);
            $temp->idCrypt = Str::slug($temp->id, '-');
        }
        return Inertia::render('Temporadas/index', [
            'temporadas' => $temporadas,
            'status' => $status,
            'mensaje' => $mensaje,
            'request' => [
                'status' => $status,
                'mensaje' => $mensaje,
            ],
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
            return redirect()->route('temporada.index')->with([
                'status' => 200,
                'mensaje' => 'La Temporada fue creada exitosamente!',
            ]);

            // return Inertia::location(route('temporada.index') . '?status=200&mensaje=La Temporada fue creada exitosamente!');
            // return redirect()->back()->with([
            //     'status' => 200,
            //     'mensaje' => 'La Temporada fue creada exitosamente!'
            // ]);
        } else {
            // return Inertia::render('Temporadas/form', [
            //     'action' => 'create',
            //     'errors' => (object) [
            //         'status' => 400,
            //         'mensaje' => 'La Temporada no pudo ser creado, intente más tarde!'
            //     ]
            // ]);
            return redirect()->back()->withErrors([
                'status' => 400,
                'mensaje' => 'La Temporada no pudo ser creada, intente más tarde!',
            ]);
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
            // return Inertia::render('Temporadas/form', [
            //     'action' => 'edit',
            //     'data' => [
            //         'status' => 200,
            //         'mensaje' => 'La Temporada fue actualizada exitosamente!',
            //     ],
            // ]);

            // return Inertia::location(route('temporada.index') . '?status=200&mensaje=La Temporada fue creada exitosamente!');
            // return redirect()->back()->([
            //     'status' => 200,
            //     'mensaje' => 'La Temporada fue actualizada exitosamente!',
            // ]);
            return redirect()->route('temporada.edit', [$id,
                'status' => 200,
                'mensaje' => 'La Temporada fue actualizada exitosamente!',
            ])->with([
                'status' => 200,
                'mensaje' => 'La Temporada fue actualizada exitosamente!',
            ]);
        } else {
            return redirect()->back()->withErrors([
                'status' => 400,
                'mensaje' => 'La Temporada no pudo ser actualizada, intente más tarde!',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy($id) {
        //
    }
}
