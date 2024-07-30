<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TemporadaResquest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        $rules = [
            'nombre' => 'required:string',
            'prefijo' => 'required:string|unique:temporadas,prefijo',
            'fecha_inicio' => 'required|date',
            'fecha_cierre' => 'required_with:fecha_inicio|date|after:fecha_inicio',
            // "inscripcion_inicio" => "required|date",
            // "inscripcion_cierre" => "nullable|date|after:inscripcion_inicio",
        ];

        if (in_array($this->method(), ['PUT', 'PATCH'])) {
            $rules['id'] = 'required:number';
            $rules['prefijo'] = 'required:string';
        }
        return $rules;
    }
}
