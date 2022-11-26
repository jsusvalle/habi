import { isEmptyObject } from "utils/helpers";

const regNumber = new RegExp("^[0-9]+$");
const regEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const isValidEmail = (value) => {
    return value === "" ? false : regEmail.test(value.toLowerCase());
}

export const isValid = (value, validation) => {
  if (["text", "email", "boolean"].includes(validation)) return true;

  return value === "" ? true : regNumber.test(value);
};

export const validateKeys = (object, validations, onSuccess, setError) => {
  let objectError = {};
  
  for (const [key, value] of Object.entries(object)) {
    if (validations[key].required) {
      const isEmpty = value.trim().length === 0;

      if (isEmpty) {
        objectError = { ...objectError, [key]: "El campo es requerido" };
      }
      
      if(!isEmpty && validations[key].type === "email") {
        if(!isValidEmail(value)) {
          objectError = { ...objectError, [key]: "El email no es válido" };
        }
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
