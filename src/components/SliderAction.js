"use client";
import { useState } from "react";
import SliderActionPrevIcon from "@components/SliderActionPrevIcon";
import SliderActionNextIcon from "@components/SliderActionNextIcon";
import SliderActionContent from "@components/SliderActionContent";

const SliderAction = ({ content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextSlide = () => {
    setSlideDirection("slide-out-left");
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
      setSlideDirection("slide-in-right");
    }, 200);
  };

  const prevSlide = () => {
    setSlideDirection("slide-out-right");
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? content.length - 1 : prevSlide - 1
      );
      setSlideDirection("slide-in-left");
    }, 200);
  };

  const goToSlide = (index) => {
    const direction = index > currentSlide ? "right" : "left";
    if (direction === "right") {
      setSlideDirection("slide-out-left");
      setTimeout(() => {
        setCurrentSlide(index);
        setSlideDirection("slide-in-right");
      }, 200);
    } else {
      setSlideDirection("slide-out-right");
      setTimeout(() => {
        setCurrentSlide(index);
        setSlideDirection("slide-in-left");
      }, 200);
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) {
      setIsDragging(false); // Para evitar múltiplas chamadas
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false); // Finaliza o estado de arrasto
  };

  return (
    <div 
      className="mt-0 mb-0 pt-0 pb-9 bg-0 h-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container">
        <div className="row div-size gx-3 gx-sm-4 gx-md-4 gx-lg-4 gx-xl-5 align-items-center text-center">
          <div className="col-1 col-sm-1 col-md-1 col-lg-1 offset-lg-0">
            <div className="bg-0">
              <button className="prev-button" onClick={prevSlide}>
                <SliderActionPrevIcon />
              </button>
            </div>
          </div>
          <div className="col-10 col-sm-10 col-md-10 col-lg-10">
            <div className="bg-0 radius">
              <SliderActionContent content={content} currentSlide={currentSlide} slideDirection={slideDirection} />
            </div>
            <div className="slide-indicator">
              {content.map((_, index) => (
                <button
                  key={index}
                  className={`bullet ${currentSlide === index ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          <div className="col-1 col-sm-1 col-md-1 col-lg-1">
            <div className="bg-0">
              <button className="next-button" onClick={nextSlide}>
                <SliderActionNextIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderAction;
