import { useState } from 'react';

const usePhoneInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const formatPhone = (input) => {
    let formattedValue = '';

    if (input.length > 2) {
      formattedValue += `(${input.slice(0, 2)}) `; // Adiciona o DDD
      formattedValue += input.slice(2); // Adiciona o restante do número
    }

    // Adiciona o traço após o 9º dígito se houver
    if (formattedValue.length > 9) {
      formattedValue = `${formattedValue.slice(0, 9)}-${formattedValue.slice(9)}`;
    }

    return formattedValue;
  };

  const handleChange = (input) => {
    const formattedValue = formatPhone(input); // Formata o telefone
    setValue(formattedValue); // Atualiza o estado com o número formatado
  };

  return [value, handleChange]; // Retorna o valor e a função de mudança
};

export default usePhoneInput;
