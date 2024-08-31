<?php

namespace App\Http\Controllers;

use App\Models\Ciclo;
use App\Models\Curriculum;
use App\Models\Requisito;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CicloController extends Controller {
    /**
     * Display a listing of the resource.
     *
     */
    public function index() {
        $ciclos = Ciclo::whereHas('curriculum', function ($query) {$query->activo();})->WithRequisitos()->get();
        return Inertia::render('Ciclos/index', [
            'ciclos' => $ciclos,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create() {
        $curriculums = Curriculum::activo()->with('ciclos')->get();
        return Inertia::render('Ciclos/form', [
            'action' => 'create',
            'curriculums' => $curriculums,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request) {
        $input = $request->all();
        $requisitos = $request->requisitos;
        try {
            DB::beginTransaction();
            $ciclo = Ciclo::create($input);
            if ($ciclo) {
                foreach ($requisitos as $requi) {
                    // $requiObj = (object) $requi;
                    $requi["ciclo_id"] = $ciclo->id;
                    // if (!empty($requiObj->delete)) {
                    //     $item = Requisito::whereId($requiObj->id)->doesntHave('adicionalesInscripciones')->first();
                    //     if (is_null($item)) {
                    //         throw new Exception('Adicional con Inscripciones');
                    //     }
                    //     $item->delete();
                    // } else if (!empty($requiObj->id)) {
                    //     Requisito::find($requiObj->id)->update($requi);
                    // } else {
                    Requisito::create($requi);
                    // }
                }
                DB::commit();
                return response()->json(["message" => "El Ciclo fue creada exitosamente!"], 200);
            } else {
                return response()->json(["message" => "", 'server' => '¡El Ciclo no pudo ser creada, intente más tarde!'], 400);
            }

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(["message" => "", 'server' => '¡El Ciclo no pudo ser creada, intente más tarde!'], 500);

        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show($id) {
        $ciclo = Ciclo::whereId($id)->WithRequisitos()->with('requisitos.cicloPre.curriculum')->first();
        $curriculums = Curriculum::activo()->with('ciclos')->get();
        return Inertia::render('Ciclos/form', [
            'action' => 'show',
            'ciclo' => $ciclo,
            'curriculums' => $curriculums,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     */
    public function edit($id) {
        $ciclo = Ciclo::whereId($id)->WithRequisitos()->with('requisitos.cicloPre.curriculum')->first();
        $curriculums = Curriculum::activo()->with('ciclos')->get();

        return Inertia::render('Ciclos/form', [
            'action' => 'edit',
            'ciclo' => $ciclo,
            'curriculums' => $curriculums,

        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     */
    public function update(Request $request, $id) {
        $ciclo = Ciclo::find($id);
        $input = $request->all();
        $requisitos = $request->requisitos;
        try {
            DB::beginTransaction();
            $ciclo = $ciclo->update($input);
            if ($ciclo) {
                foreach ($requisitos as $requi) {
                    $requiObj = (object) $requi;
                    $requi["ciclo_id"] = $ciclo->id;
                    if (!empty($requiObj->delete)) {
                        $item = Requisito::find($requiObj->id);
                        if (is_null($item)) {
                            throw new Exception('Adicional con Inscripciones');
                        }
                        $item->delete();
                    } else if (!empty($requiObj->id)) {
                        Requisito::find($requiObj->id)->update($requi);
                    } else {
                        Requisito::create($requi);
                    }
                }
                DB::commit();
                return response()->json(["message" => "El Ciclo fue actualizada exitosamente!"], 200);
            } else {
                return response()->json(["message" => "", 'server' => '¡El Ciclo no pudo ser actualizada, intente más tarde!'], 400);
            }

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(["message" => $th->getMessage(), 'server' => '¡El Ciclo no pudo ser actualizada, intente más tarde!'], 500);

        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy($id) {
        $ciclo = Ciclo::whereId($id)->WithRequisitos()->first();
        try {
            $state = $ciclo->delete();
            if ($state) {
                return response()->json(["message" => "El Ciclo fue eliminada exitosamente!"], 200);
            } else {
                return response()->json(["message" => "", 'server' => '¡El Ciclo no pudo ser eliminada, intente más tarde!'], 400);

            }
        } catch (\Throwable $th) {
            return response()->json(["message" => $th->getMessage(), 'server' => '¡El Ciclo no pudo ser eliminada, intente más tarde!'], 500);
        }

    }
}
