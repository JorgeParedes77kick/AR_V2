// Campo obligatorio
function required(fieldName, fieldValue) {
  // console.log('fieldName, fieldValue:', fieldName, fieldValue);
  if (fieldValue) return true;
  return `El campo ${fieldName} es obligatorio`;
}

// Longitud mínima de un campo
function minLength(fieldName, fieldValue, min) {
  if (fieldValue.length >= min) return true;
  return `El campo ${fieldName} debe tener al menos ${min} caracteres`;
}

// Longitud máxima de un campo
function maxLength(fieldName, fieldValue, max) {
  if (fieldValue.length <= max) return true;
  return `El campo ${fieldName} no puede tener más de ${max} caracteres`;
}

// Valor mínimo de un campo numérico
function minValue(fieldName, fieldValue, min) {
  if (Number(fieldValue) >= min) return true;
  return `El valor del campo ${fieldName} debe ser al menos ${min}`;
}

// Valor máximo de un campo numérico
function maxValue(fieldName, fieldValue, max) {
  if (Number(fieldValue) <= max) return true;
  return `El valor del campo ${fieldName} no puede ser mayor que ${max}`;
}

// Fecha mínima
function minDate(fieldName, fieldValue, min) {
  const fieldDate = new Date(fieldValue);
  const minDate = new Date(min);
  if (fieldDate >= minDate) return true;
  return `La fecha del campo ${fieldName} debe ser posterior a ${min}`;
}

// Fecha máxima
function maxDate(fieldName, fieldValue, max) {
  const fieldDate = new Date(fieldValue);
  const maxDate = new Date(max);
  if (fieldDate <= maxDate) return true;
  return `La fecha del campo ${fieldName} debe ser anterior a ${max}`;
}

// Validación de correo electrónico
function email(fieldName, fieldValue) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(fieldValue)) return true;
  return `El campo ${fieldName} debe ser un correo electrónico válido`;
}

// Puedes añadir más reglas según tus necesidades

const rulesFun = {
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  minDate,
  maxDate,
  email,
  // Add other validation functions here
};
export function validate(fieldName, rules) {
  const splittedRules = rules.split('|');
  const rulesArray = [];

  splittedRules.forEach((rule) => {
    if (rule.includes(':')) {
      const splittedRule = rule.split(':');
      const ruleName = splittedRule[0];
      const ruleValue = splittedRule[1];
      rulesArray.push((v) => rulesFun[ruleName](fieldName, v, ruleValue));
    } else {
      rulesArray.push((v) => rulesFun[rule](fieldName, v));
    }
  });
  // console.log('rulesArray:', rulesArray[0]);
  return rulesArray;
}
