import { useState } from "react";

const useFormInput = (type, validateValue) => {
  const [value, setValue] = useState(() => {
    if (type === "text") {
      return '';
    }
    else {
      return false;
    }
  });

  const [isTouched, setIsTouched] = useState(false);
  
  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setValue(() => {
      if (type === "text") {
        return event.target.value;
      } else if (type === "button") {
        return event;
      } else {
        return event.target.checked;
      }
    });
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
      setValue(() => {
        if (type === "text") {
          return '';
        }
        else {
          return false;
        }
      });  
      setIsTouched(false);
  };

  const valueInputClasses = hasError
  ? "form-control invalid"
  : "form-control";

  return {
    value,
    isValid: valueIsValid,
    hasError,
    valueInputClasses,
    valueChangeHandler,
    inputBlurHandler,
    resetInput
  }
};

export default useFormInput;
