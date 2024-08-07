<?php

namespace App\Http\Controllers;

use App\Http\Requests\CurriculumRequest;
use App\Models\Curriculum;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CurriculumController extends Controller {
    /**
     * Display a listing of the resource.
     *
     */
    public function index() {
        $curriculums = Curriculum::all();
        return Inertia::render('Curriculums/index', [
            'curriculums' => $curriculums,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create() {
        return Inertia::render('Curriculums/form', [
            'action' => 'create',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(CurriculumRequest $request) {
        $input = $request->all();
        $curriculum = Curriculum::create($input);

        if ($curriculum) {
            return response()->json(["message" => "El Curriculum fue creada exitosamente!"], 200);
        } else {
            return response()->json(["message" => "", 'server' => '¡El Curriculum no pudo ser creada, intente más tarde!'], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show($id) {
        $curriculum = Curriculum::find($id);
        return Inertia::render('Curriculums/form', [
            'action' => 'show',
            'curriculum' => $curriculum,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     */
    public function edit($id) {
        $curriculum = Curriculum::find($id);
        return Inertia::render('Curriculums/form', [
            'action' => 'edit',
            'curriculum' => $curriculum,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     */
    public function update(CurriculumRequest $request, $id) {
        $input = $request->all();
        $curriculum = Curriculum::find($id);

        try {
            $state = $curriculum->update($input);

            if ($state) {
                return response()->json(["message" => "El Curriculum fue actualizada exitosamente!"], 200);
            } else {
                return response()->json(["message" => "", 'server' => '¡El Curriculum no pudo ser actualizada, intente más tarde!'], 400);
            }
        } catch (\Throwable $th) {
            return response()->json(["message" => $th->getMessage(), 'server' => '¡El Curriculum no pudo ser actualizada, intente más tarde!'], 500);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy($id) {
        $curriculum = Curriculum::find($id);
        try {
            $state = $curriculum->delete();
            if ($state) {
                return response()->json(["message" => "El Curriculum fue eliminada exitosamente!"], 200);
            } else {
                return response()->json(["message" => "", 'server' => '¡El Curriculum no pudo ser eliminada, intente más tarde!'], 400);

            }
        } catch (\Throwable $th) {
            return response()->json(["message" => $th->getMessage(), 'server' => '¡El Curriculum no pudo ser eliminada, intente más tarde!'], 500);
        }

    }
}
