import axios from "axios";

export const CRUD = {
  index: 'index',
  show: 'show',
  create: 'create',
  edit: 'edit',
  update: 'update',
  delete: 'delete',
};
export const ACCION = {
  show: 'Visualización',
  create: 'Creación',
  edit: 'Edición',
};

export const TEXT_BUTTON = {
  create: 'Crear',
  edit: 'Actualizar',
};

export const FORM_POST = {
  create: 'store',
  edit: 'update',
};
/**
 *
 * @param {HTMLInputElement} input
 * @param {boolean} value
 */
export const validInput = (input, value) => {
  input.classList.remove('is-invalid');
  input.classList.remove('is-valid');
  if (value) input.classList.add('is-valid');
  else input.classList.add('is-invalid');
};
/**
 *
 * @param {HTMLInputElement} input
 */
export const removeValid = (input) => {
  input.classList.remove('is-invalid');
  input.classList.remove('is-valid');
};

export const validateForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    let validForm = true;
    form.querySelectorAll('.v-input--error').forEach((x) => { console.log(x); validForm = false;});
    if (!validForm) {
        e.stopPropagation();
        return false;
    } else {
        return true;
    }

};

export const getList = async function (url) {
  return await axios.get(url).then(result => {
    if (result) {
      if (result.status === 200) {
        return result.data;
      }else{
        return [];
      }
    }else {
      return [];
    }
  }).catch(error => {
    console.log(JSON.stringify(error.response.data.message));
    return [];
  });
};

