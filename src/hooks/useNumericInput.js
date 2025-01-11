import { useState } from 'react';

const useNumericInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (input) => {
    // Permitir apenas números
    const onlyDigits = input.replace(/\D/g, '');
    setValue(onlyDigits);
  };

  return [value, handleChange]; // Retorna o valor e a função de mudança
};

export default useNumericInput;
