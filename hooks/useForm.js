import { useState } from "react";

import { validateKeys, isValid } from "utils/useFormUtils";

const useForm = (state = { initialState: {}, validations: {} }, onSubmit) => {
  const [formData, setFormData] = useState(state.initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (isValid(value, state.validations[name].type)) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateKeys(formData, state.validations, onSubmit, setErrors);
  };

  const resetForm = () => {
    setFormData({ ...state.initialState });
  };

  return { formData, handleInputChange, handleSubmit, resetForm, errors };
};

export default useForm;
