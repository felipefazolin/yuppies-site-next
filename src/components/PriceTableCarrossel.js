import { useState, useRef, useEffect } from "react";
import PriceTable from "@components/PriceTable";
import PriceTableControls from "@components/PriceTableControls";
import {
  initializeResizeListener,
  goToNextSlide,
  goToPreviousSlide,
  getTouchHandlers,
} from "@utils/carrosselFunctions";

export default function PriceTableCarousel({ priceTables }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);

  const totalSlides = priceTables.length;



  const visibleTables = 1;

  useEffect(() => {
    // Inicializa o listener de redimensionamento para ajustar a largura dos slides
    const cleanup = initializeResizeListener(
      carouselRef,
      setSlideWidth,
      visibleTables
    );
    return cleanup;
  }, [visibleTables]);

  // Atualiza a largura do slide sempre que a tela é redimensionada
  useEffect(() => {
    const updateSlideWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        setSlideWidth(containerWidth / visibleTables); // Calcula a largura de cada slide
      }
    };
    window.addEventListener("resize", updateSlideWidth);
    updateSlideWidth(); // Inicializa na montagem
    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, [visibleTables]);

  // Obtém os handlers para eventos de toque e movimento do carrossel
  const { handleTouchStart, handleTouchMove, handleTouchEnd } =
    getTouchHandlers(
      currentIndex,
      setCurrentIndex,
      totalSlides,
      visibleTables,
      setIsDragging,
      setStartX,
      isDragging,
      startX,
      translateX,
      setTranslateX
    );

  return (
    <div className="mt-10" ref={carouselRef}>
      <div className="d-flex justify-content-center m-3">
        <h3>
          Escolha a hospedagem de site ideal e <br /> experimente sem riscos por
          30 dias
        </h3>
      </div>

      {/* Componente de controles do carrossel */}
      <PriceTableControls
        onPreviousClick={() => goToPreviousSlide(currentIndex, setCurrentIndex)}
        onNextClick={() =>
          goToNextSlide(currentIndex, setCurrentIndex, totalSlides, visibleTables)
        }
      />

      {/* Carrossel de tabelas de preços */}
      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        style={{
          display: 'flex', // Usando flexbox para alinhar os slides em uma linha
          transition: isDragging ? "none" : "transform 0.5s ease",
          transform: `translateX(calc(-${
            currentIndex * slideWidth
          }px + ${translateX}px))`,
        }}
      >
        {priceTables.map((table, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ minWidth: `${slideWidth}px` }} // Cada slide terá a largura correta
          >
            <PriceTable
              name={table.name}
              content={table.content}
              price={table.price}
              type={table.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
