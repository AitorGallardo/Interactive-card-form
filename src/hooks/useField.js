import { useState } from 'react';

export const useField = ({ val = '', type, customOnChange }) => {
  const [value, setValue] = useState(val);
  const [isValid, setisValid] = useState(true);

  const onChange = (event) => {
    const value = event.target.value;
    const isValid = event.target.validity.valid;
    setValue(value);
    setisValid(isValid);
    if (customOnChange) {
      customOnChange({value,isValid});
    }
    // if(formatField){
    //   // console.log('enrra ',);
    //   const newValue = formatField(event.target.value);
    //   setValue(newValue)
    // }
  };

  return {
    type,
    value,
    isValid,
    onChange,
  };
};
