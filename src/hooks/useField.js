import { useState } from 'react';

export const useField = ({ val = '', type, customOnChange }) => {
  const [value, setValue] = useState(val);
  const [valid, setValid] = useState({ valid: true });
  const [isPristine, setIsPristine] = useState(true);

  const onChange = (event) => {
    let value = event.target.value;
    const isValid = event.target.validity.valid;
    const mismatch = event.target.validity.patternMismatch;
    const valueMissing = event.target.validity.valueMissing;

    if (customOnChange) {
      value = customOnChange({ value });
    }

    setValue(value);
    setValid({ isValid, mismatch, valueMissing });

    if(isPristine){
      event.target.required = true
      setIsPristine(false)
    }

  };

  return {
    type,
    value,
    valid,
    onChange,
  };
};
