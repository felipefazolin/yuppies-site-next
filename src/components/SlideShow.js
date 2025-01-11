"use client";
import { useEffect, useState, useRef } from "react";

const SlideShow = ({ columnsToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderContainerRef = useRef(null); // Referência ao container do slider
  const slideRef = useRef(null); // Referência a um slide para calcular a largura

  useEffect(() => {
    const totalItems = document.querySelectorAll(".slider-container .slide-item").length;

    const nextButton = document.getElementById("nextBtn");
    const prevButton = document.getElementById("prevBtn");

    const handleNext = () => {
      if (currentIndex + columnsToShow < totalItems) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    // Adicionar event listeners depois que os elementos estão disponíveis
    if (nextButton && prevButton) {
      nextButton.addEventListener("click", handleNext);
      prevButton.addEventListener("click", handlePrev);
    }

    // Cleanup: remover event listeners quando o componente desmontar
    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", handleNext);
        prevButton.removeEventListener("click", handlePrev);
      }
    };
  }, [currentIndex, columnsToShow]);

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;
    const slideElement = slideRef.current;

    // Verifique se o slide e o container existem
    if (sliderContainer && slideElement) {
      const slideWidth = slideElement.offsetWidth; // Pegue a largura de um slide

      // Calcular o deslocamento com base na largura da coluna
      const offset = currentIndex * slideWidth;

      sliderContainer.style.transform = `translateX(-${offset}px)`;
    }
  }, [currentIndex, columnsToShow]);

  // Função para definir a classe Bootstrap dinamicamente
  const getColClass = () => {
    switch (columnsToShow) {
      case 1:
        return "col-12"; // Uma coluna visível
      case 2:
        return "col-6";  // Duas colunas visíveis
      case 3:
        return "col-4";  // Três colunas visíveis
      default:
        return "col-4";  // Valor padrão (3 colunas)
    }
  };

  return (
    <div className="container my-10">
      {/* Botões de navegação centralizados */}
      <div className="row justify-content-center g-3">
        <div className="col-2 d-flex justify-content-center">
          <button className="btn btn-primary" id="prevBtn">
            Anterior
          </button>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <button className="btn btn-primary" id="nextBtn">
            Próximo
          </button>
        </div>
      </div>

      {/* Container do slider */}
      <div className="row flex-nowrap slider-container mt-4 g-3 g-sm-4 g-md-4 g-lg-4 g-xl-5" ref={sliderContainerRef}>
        <div className={getColClass()} ref={slideRef}>
          <div className="slide-item">1</div>
        </div>
        <div className={getColClass()}>
          <div className="slide-item">2</div>
        </div>
        <div className={getColClass()}>
          <div className="slide-item">3</div>
        </div>
        <div className={getColClass()}>
          <div className="slide-item">4</div>
        </div>
        <div className={getColClass()}>
          <div className="slide-item">5</div>
        </div>
        <div className={getColClass()}>
          <div className="slide-item">6</div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
