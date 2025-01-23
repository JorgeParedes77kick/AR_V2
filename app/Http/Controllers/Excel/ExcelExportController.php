<?php
namespace App\Http\Controllers\Excel;

use App\Helpers\Debug; // Asegúrate de crear esta clase de exportación
use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExcelExportController extends Controller {
    public function export() {
    }
    public function exportPersonas(Request $request) {
        $all = $request->all();
        Debug::info($all);

        // $buscador = trim($request->input('buscador', ''));

        $usuarios = Usuario::
            join('personas as p', 'persona_id', 'p.id')
            ->join('generos as g', 'p.genero_id', 'g.id')
            ->join('estados_civiles as ec', 'p.estado_civil_id', 'ec.id')
            ->join('nacionalidades as n', 'p.nacionalidad_id', 'n.id')
            ->join('regiones as r', 'p.region_id', 'r.id')
            ->join('paises as pa', 'r.pais_id', 'pa.nombre');

        // if ($buscador != '') {
        //     $usuarios = $usuarios->where(function ($q) use ($buscador) {
        //         $q->where('p.nombre', 'like', '%' . $buscador . '%')
        //             ->orWhere('p.apellido', 'like', '%' . $buscador . '%')
        //             ->orWhere('p.dni', 'like', '%' . $buscador . '%')
        //             ->orWhere('p.telefono', 'like', '%' . $buscador . '%')
        //             ->orWhere('p.ocupacion', 'like', '%' . $buscador . '%');
        //     });

        // }
        // foreach (['genero', 'estado_civil', 'nacionalidad', 'region'] as $field) {
        //     $value = $request->input($field, null);
        //     if (! is_null($value)) {
        //         $usuarios = $usuarios->where('p.' . $field . '_id', $value);
        //     }
        // }
        // $pais_id = $request->input('pais', null);
        // if (! is_null($pais_id)) {
        //     $usuarios = $usuarios->where('pa.id', $pais_id);
        // }
        $usuarios = $usuarios->select('email', 'p.nombre', 'p.apellido', 'p.telefono', 'p.ocupacion',
            'g.nombre as genero', 'ec.estado as estado civil', 'n.nombre as nacionalidad',
            'r.nombre as region', 'pa.nombre as país'
        )->get();
        $usuarios->makeHidden(['fullNombre', 'nombreCompleto', 'idCrypt', 'persona_id', 'persona']);
        return Excel::download(new GenericExport($usuarios), 'usuarios.xlsx');
    }
}
