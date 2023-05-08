import { useState } from 'react';

export const useField = ({ type, formatField }) => {
  const [value, setValue] = useState('');
  const [isValid, setisValid] = useState(true);

  const onChange = (event) => {
    setValue(event.target.value);
    setisValid(event.target.validity.valid);
    if(formatField){
      // console.log('enrra ',);
      const newValue = formatField(event.target.value);
      setValue(newValue)
    }
  };

  return {
    type,
    value,
    isValid,
    onChange,
  };
};
