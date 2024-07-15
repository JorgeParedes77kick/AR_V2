<?php

namespace App\Http\Controllers;

use App\Models\Temporada;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TemporadaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $temporadas = Temporada::orderBy('prefijo', 'desc')->get();
        foreach ($temporadas as $i  => $temp) {
            // $temp->idCrypt = Crypt::encrypt($temp->id);
            $temp->idCrypt = Str::slug($temp->id, '-');
        }
        return Inertia::render('Temporadas/index', [
            'temporadas' => $temporadas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Temporadas/form', [
            "action" => 'create'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $temporada = Temporada::find($id);
        return Inertia::render('Temporadas/form', [
            "action" => 'show',
            'temporada' => $temporada
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $temporada = Temporada::find($id);
        return Inertia::render('Temporadas/form', [
            "action" => 'edit',
            'temporada' => $temporada
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
