<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RolRequest extends FormRequest {
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
            'nombre' => 'required|alpha_num|unique:roles,nombre',

        ];
        if (in_array($this->method(), ['PUT', 'PATCH'])) {
            $rules['id'] = 'required|numeric';
        }
        return $rules;
    }
}
