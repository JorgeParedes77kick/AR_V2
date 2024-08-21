<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;

class RegionController extends Controller
{
  public function list() {
    $regiones = Region::select('id', 'nombre')->orderBy('id', 'asc')->get();
    return response($regiones, 200);
  }
}
