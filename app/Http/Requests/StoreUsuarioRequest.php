<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUsuarioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
      $idValidate = $this->route('usuarios') == NULL ? "": ','.($this->route('usuarios')->id. ',id' );
      return [
        'email' => 'required|email|max:255|unique:usuarios,email,'.$idValidate,
        'password' => 'required|alpha_num|max:255',
        'nick_name' => 'required|max:100|regex:/^[a-zA-Z.]+$/',
        'persona_id' => 'required|numeric',
      ];
    }
}
