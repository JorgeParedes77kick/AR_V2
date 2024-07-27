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

