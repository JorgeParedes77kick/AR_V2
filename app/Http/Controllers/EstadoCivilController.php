<?php

namespace App\Http\Controllers;

use App\Models\EstadoCivil;
use Illuminate\Http\Request;

class EstadoCivilController extends Controller
{
  public function list() {
    $estadosCiviles = EstadoCivil::select('id', 'estado')->orderBy('id', 'asc')->get();
    return response($estadosCiviles, 200);
  }
}
