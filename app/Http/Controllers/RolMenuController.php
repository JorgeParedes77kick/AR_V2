<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Rol;
use App\Models\RolMenu;
use App\Http\Requests\StoreRolMenuRequest;
use App\Http\Requests\UpdateRolMenuRequest;
use Inertia\Inertia;

class RolMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
      $menus = Menu::getMenu(false);
      $roles = Rol::orderBy('id')->get();
      return Inertia::render('RolMenu/index', [
        'menus' => $menus,
        'roles' => $roles,
      ]);
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
     * @param  \App\Http\Requests\StoreRolMenuRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRolMenuRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RolMenu  $rolMenu
     * @return \Illuminate\Http\Response
     */
    public function show(RolMenu $rolMenu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RolMenu  $rolMenu
     * @return \Illuminate\Http\Response
     */
    public function edit(RolMenu $rolMenu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRolMenuRequest  $request
     * @param  \App\Models\RolMenu  $rolMenu
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRolMenuRequest $request, RolMenu $rolMenu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RolMenu  $rolMenu
     * @return \Illuminate\Http\Response
     */
    public function destroy(RolMenu $rolMenu)
    {
        //
    }
}
