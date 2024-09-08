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

/**
 * Get a query map based on a query string.
 *
 * The function will populate a map variable with key value pairs of the parameters.
 *
 * If there is more than one of the same key, the function will populate an array in the map with the multiple values within it
 *
 * @param  {string} query The query string - the question mark is optional
 * @return {object}       key value pairs of the parameter / value of the parameter
 */
export const getQueryMap = function (query) {
  if(typeof query !== 'string') {
    return null;
  }
  const toType = function (a) {
    return ({}).toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }, map = {};

  // map the hit query into a proper object
  query.replace(/([^&|\?=]+)=?([^&]*)(?:&+|$)/g, function (match, key, value) {
    if (key in map) {
      // the key already exists, so we need to check if it is an array, if not, make it an array and add the new value
      if (toType(map[key]) !== 'array') {
        // it's not an array - make it an array
        map[key] = [map[key]];
      }
      // push the new value into the array
      map[key].push(decodeURIComponent(value));
    } else {
      // put the value into the map
      map[key] = decodeURIComponent(value);
    }
  });
  return map;
}

