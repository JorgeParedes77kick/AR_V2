<?php

namespace App\Http\Controllers;

use App\Actions\Fortify\CreateNewUser;
use App\Helpers\Debug;
use App\Helpers\RolHelper;
use App\Http\Requests\StorePersonaRequest;
use App\Http\Requests\UpdatePersonaRequest;
use App\Models\EstadoCivil;
use App\Models\Genero;
use App\Models\Nacionalidad;
use App\Models\Pais;
use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Throwable;

class PersonaController extends Controller {
    /**
     */
    public function index() {
        $genero = Genero::all();
        $estadoCivil = EstadoCivil::all();
        $pais = Pais::with('regiones')->orderBy('nombre', 'asc')->get();
        $nacionalidad = Nacionalidad::all();
        return Inertia::render('Perfil/index', [
            'genero' => $genero,
            'estadoCivil' => $estadoCivil,
            'pais' => $pais,
            'nacionalidad' => $nacionalidad,
        ]);
    }

    /**
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StorePersonaRequest $request
     * @return JsonResponse
     * @throws Throwable
     */
    public function store(StorePersonaRequest $request) {

        $validated = $request->validated();
        if ($validated) {
            try {
                DB::beginTransaction();
                $person = Persona::create($validated);
                // $request->persona_id = $person->id;

                $createUser = new CreateNewUser();
                $user = $createUser->create([
                    'nick_name' => $request->nick_name,
                    'email' => $request->email,
                    'password' => $request->password,
                    'persona_id' => $person->id,
                ]);
                if ($user instanceof Usuario) {
                    $user->roles()->attach(RolHelper::$ALUMNO);
                    DB::commit();
                    return response()->json(['person' => "Registro Exitoso"], 200);
                }
            } catch (Throwable $ex) {
                Debug::info($ex);
                DB::rollBack();
                $this->destroy($person->id);
                throw $ex;
            }

        } else {
            abort(404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Persona $persona) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(String $idCrypt) {
        $id = base64_decode($idCrypt);

        $usuario = Usuario::where('id', $id)->with('persona.genero')->with('persona.estadoCivil')
            ->with('persona.pais')->with('persona.region')->with('persona.nacionalidad')
            ->select('id', 'nick_name', 'email', 'persona_id')
            ->first();

        $genero = Genero::all();
        $estadoCivil = EstadoCivil::all();
        $pais = Pais::with('regiones')->orderBy('nombre', 'asc')->get();
        $nacionalidad = Nacionalidad::all();
        // user
        return Inertia::render('Perfil/form', [
            'action' => 'edit',
            'mi-perfil' => Auth::user()->id == $id,
            'usuario' => $usuario,
            'genero' => $genero,
            'estadoCivil' => $estadoCivil,
            'pais' => $pais,
            'nacionalidad' => $nacionalidad,
        ]
        );

    }

    /**
     * Update the specified resource in storage.
     *
     */
    public function update(UpdatePersonaRequest $request, String $idCrypt) {
        $id = base64_decode($idCrypt);
        $data = $request->validated();
        $newContrasena = $request->input('newContrasena');
        $usuario = Usuario::find($id);
        $persona = $usuario->persona;

        try {
            DB::beginTransaction();
            $state = $persona->update($data);
            if ($newContrasena) {
                $usuario->update([Hash::make($newContrasena)]);
            }
            DB::commit();
            if ($state) {
                return response()->json(["message" => "El Persona fue actualizada exitosamente!", "persona" => $persona], 200);
            } else {
                return response()->json(["message" => "", 'server' => '¡El Persona no pudo ser actualizada, intente más tarde!'], 400);
            }
        } catch (Throwable $th) {
            DB::rollBack();
            return response()->json(["message" => $th->getMessage(), 'server' => '¡El Persona no pudo ser actualizada, intente más tarde!'], 500);

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $persona
     * @return JsonResponse
     */
    public function destroy(int $persona) {
        Persona::destroy($persona);
        return response()->json(['message' => 'OK'], 200);
    }

    public function perfil() {
        $ID = Auth::user()->id;
        $ID = base64_encode($ID);
        return $this->edit($ID);
    }

    public function find(Request $request) {

        $buscador = trim($request->input('buscador', ''));
        $perPage = trim($request->input('perPage', 50));

        $usuarios = Usuario::with('persona')->whereHas('persona', function ($query) use ($request, $buscador) {
            if ($buscador != '') {

                $query->where(function ($q) use ($buscador) {
                    $q->where('nombre', 'like', '%' . $buscador . '%')
                        ->orWhere('apellido', 'like', '%' . $buscador . '%')
                        ->orWhere('dni', 'like', '%' . $buscador . '%')
                        ->orWhere('telefono', 'like', '%' . $buscador . '%')
                        ->orWhere('ocupacion', 'like', '%' . $buscador . '%');
                });
            }
            // Filtrar por género, estado civil, nacionalidad y región si están presentes
            foreach (['genero', 'estado_civil', 'nacionalidad', 'region'] as $field) {
                $value = $request->input($field, null);
                if (!is_null($value)) {
                    $query->where($field . '_id', $value);
                }
            }
            // Filtrar por país
            $pais_id = $request->input('pais', null);
            if (!is_null($pais_id)) {
                $query->whereHas('region.pais', function ($q) use ($pais_id) {
                    $q->where('paises.id', $pais_id);
                });
            }

        });
        if ($buscador != '') {
            $usuarios->orWhere('email', 'like', '%' . $buscador . '%');
        }
        $usuarios = $usuarios->paginate($perPage);

        return response()->json(['message' => 'OK', 'usuarios' => $usuarios], 200);
    }

}
