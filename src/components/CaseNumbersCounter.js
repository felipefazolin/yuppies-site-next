"use client";
import { useState, useEffect } from "react";

function CaseNumbersCounter({ endNumber }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Duração da animação em milissegundos
    const incrementTime = Math.abs(Math.floor(duration / endNumber)); // Tempo entre incrementos

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === endNumber) {
        clearInterval(timer); // Para o contador quando o número final é atingido
      }
    }, incrementTime);

    return () => clearInterval(timer); // Limpeza no final
  }, [endNumber]);

  return <div className="case-numbers">{count}</div>;
}

export default CaseNumbersCounter;
