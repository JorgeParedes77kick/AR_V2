<?php

namespace App\Http\Controllers;

use App\Actions\Fortify\CreateNewUser;
use App\Http\Requests\StorePersonaRequest;
use App\Http\Requests\UpdatePersonaRequest;
use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\JsonResponse;
use Throwable;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

  /**
   * Store a newly created resource in storage.
   *
   * @param StorePersonaRequest $request
   * @return JsonResponse
   * @throws Throwable
   */
    public function store(StorePersonaRequest $request)
    {

        $validated = $request->validated();
        if($validated){
          $person = Persona::create($validated);
          $request->persona_id = $person->id;
          try {
            $createUser = new CreateNewUser();
            $user = $createUser->create([
              'nick_name' => $request->nick_name,
              'email' => $request->email,
              'password' => $request->password,
              'persona_id' => $person->id,
            ]);
            if($user instanceof Usuario ){
              $user->roles()->attach(5);
              return response()->json(['person' => "Registro Exitoso"], 200);
            }
          } catch (Throwable $e) {
            $this->destroy($person->id);
            throw $e;
          }

        }else{
          abort(404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function show(Persona $persona)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function edit(Persona $persona)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePersonaRequest  $request
     * @param  \App\Models\Persona  $persona
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePersonaRequest $request, Persona $persona)
    {
        //
    }

  /**
   * Remove the specified resource from storage.
   *
   * @param int $persona
   * @return JsonResponse
   */
    public function destroy(int $persona)
    {
      Persona::destroy($persona);
      return response()->json(['message' => 'OK'], 200);
    }
}
