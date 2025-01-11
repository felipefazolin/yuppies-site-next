"use client";
import { useState, useEffect } from "react";

const ScrollPosition = ({ onScroll }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  

  // Função que atualiza a posição do scroll
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // Adiciona o listener de scroll quando o componente monta e remove quando desmonta
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        left: 10,
        padding: "10px",
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        borderRadius: "5px",
        zIndex:999
      }}
    >
      Scroll: {scrollPosition}px
    </div>
  );
};

export default ScrollPosition;
