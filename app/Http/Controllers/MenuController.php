<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use App\Models\Menu;
use App\Models\Region;
use App\Models\Rol;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
      $menus = Menu::all();
      return Inertia::render('Menu/index', [
        'menus' => $menus,
      ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
      $menus_padres = Menu::select('id', 'nombre')
        ->orderBy('nombre', 'asc')->get();
      return Inertia::render('Menu/form', [
        'action' => 'create',
        'menus_padres' => $menus_padres,
      ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreMenuRequest $request
     * @return JsonResponse
     */
    public function store(StoreMenuRequest $request)
    {
      $input = $request->all();
      $menu = Menu::create($input);

      if ($menu) {
        return response()->json(["message" => "El Menu fue creado exitosamente!"], 200);
      } else {
        return response()->json(["message" => "", 'server' => '¡El Menu no pudo ser creado, intente más tarde!'], 400);
      }
    }

  /**
   * Display the specified resource.
   *
   * @param int $id
   * @return Response
   */
    public function show(int $id)
    {
      $menu = Menu::find($id);
      return Inertia::render('Menu/form', [
        'action' => 'show',
        'menu' => $menu,
      ]);
    }

  /**
   * Show the form for editing the specified resource.
   *
   * @param int $id
   * @return Response
   */
    public function edit(int $id)
    {
        $menu = Menu::find($id);
        $menus_padres = Menu::select('id', 'nombre')
            ->orderBy('nombre', 'asc')->get();
        return Inertia::render('Menu/form', [
            'action' => 'edit',
            'menu' => $menu,
            'menus_padres' => $menus_padres,
        ]);
    }

  /**
   * Update the specified resource in storage.
   *
   * @param UpdateMenuRequest $request
   * @param int $id
   * @return JsonResponse
   */
    public function update(UpdateMenuRequest $request, int $id)
    {
      $input = $request->all();
      $menu = Menu::find($id);
      try {
        $state = $menu->update($input);

        if ($state) {
          return response()->json(["message" => "El Menu fue actualizado exitosamente!"], 200);
        } else {
          return response()->json(["message" => "", 'server' => '¡El Menu no pudo ser actualizado, intente más tarde!'], 400);
        }
      } catch (\Throwable $th) {
        return response()->json(["message" => $th->getMessage(), 'server' => '¡El Menu no pudo ser actualizado, intente más tarde!'], 500);
      }
    }

  /**
   * Remove the specified resource from storage.
   *
   * @param int $id
   * @return JsonResponse
   */
    public function destroy(int $id)
    {
      $menu = Menu::find($id);
      try {
        $state = $menu->delete();
        if ($state) {
          return response()->json(["message" => "El Menu fue eliminado exitosamente!"], 200);
        } else {
          return response()->json(["message" => "", 'server' => '¡El Menu no pudo ser eliminado, intente más tarde!'], 400);

        }
      } catch (\Throwable $th) {
        return response()->json(["message" => $th->getMessage(), 'server' => '¡El Menu no pudo ser eliminado, intente más tarde!'], 500);
      }
    }

    public function menuByRol() {
        $menus = Menu::getMenu(true);
        return response($menus, 200);
    }
}
