"use client";
import { useState } from "react";

const countryData = {
  "55": { name: "Brasil", format: "(##) #####-####" }, // Brasil
  "1": { name: "Estados Unidos", format: "(###) ###-####" }, // EUA
  "44": { name: "Reino Unido", format: "(##) #### ####" }, // Reino Unido
  "49": { name: "Alemanha", format: "(##) #######" }, // Alemanha
  "33": { name: "França", format: "(##) ## ## ## ##" }, // França
  "34": { name: "Espanha", format: "(##) #### ####" }, // Espanha
  "39": { name: "Itália", format: "(##) #### ####" }, // Itália
  "91": { name: "Índia", format: "(##) #### ####" }, // Índia
  "81": { name: "Japão", format: "(##) ####-####" }, // Japão
  "61": { name: "Austrália", format: "(##) #### ####" }, // Austrália
  // Adicione mais países conforme necessário
};

const Formulario = () => {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('55'); // Código do Brasil por padrão

  const handlePhone = (event) => {
    const inputValue = event.target.value;
    setPhone(phoneMask(inputValue, countryCode)); // Atualiza o estado com a máscara aplicada
  };

  const handleCountryChange = (event) => {
    const selectedCode = event.target.value;
    setCountryCode(selectedCode);
    setPhone(phoneMask(phone, selectedCode)); // Aplica a máscara com o novo código de país
  };

  const phoneMask = (value, code) => {
    if (!value) return "";
    value = value.replace(/\D/g, ''); // Remove tudo que não é dígito

    const format = countryData[code]?.format || ""; // Obtém a máscara do país selecionado
    let formattedValue = "";
    let valueIndex = 0;

    for (let i = 0; i < format.length; i++) {
      const char = format[i];
      if (char === "#") {
        if (valueIndex < value.length) {
          formattedValue += value[valueIndex];
          valueIndex++;
        }
      } else {
        formattedValue += char; // Adiciona caracteres fixos da máscara
      }
    }

    return formattedValue;
  };

  return (
    <div>
      <label htmlFor="country">Selecione o País:</label>
      <select id="country" onChange={handleCountryChange} value={countryCode}>
        {Object.entries(countryData).map(([code, { name }]) => (
          <option key={code} value={code}>
            {name} (+{code})
          </option>
        ))}
      </select>

      <label htmlFor="phone">Número de Telefone:</label>
      <input
        type="tel"
        id="phone"
        maxLength="15"
        value={phone} // O valor do input é gerenciado pelo estado
        onChange={handlePhone} // Chamamos handlePhone no evento onChange
        placeholder={countryData[countryCode]?.format} // Sugestão de placeholder para o usuário
      />
    </div>
  );
};

export default Formulario;
