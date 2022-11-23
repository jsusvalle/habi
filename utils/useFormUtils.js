import { isEmptyObject } from "utils/helpers";

const regNumber = new RegExp("^[0-9]+$");

export const isValid = (value, validation) => {
  if (validation === "text") return true;

  return value === "" ? true : regNumber.test(value);
};

export const validateKeys = (object, validations, onSuccess, setError) => {
  let objectError = {};

  for (const [key, value] of Object.entries(object)) {
    if (validations[key].required) {
      if (value.trim().length === 0) {
        objectError = { ...objectError, [key]: "El campo es requerido" };
      }
    }
  }

  if (isEmptyObject(objectError)) {
    setError({});
    onSuccess(object);
    return;
  }

  setError(objectError);
};
