import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name,value } = e.target;
    console.log("value:" + name + ":" + value);
    
    setValues({
      ...values,
      [name]: value
    });
  };

  const resetForm =() => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm
  };
};