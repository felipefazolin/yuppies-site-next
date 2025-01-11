"use client"; // Add this line to mark the component as a client component

import { useState, useEffect } from "react";

const GuideGrid = () => {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [breakpoint, setBreakpoint] = useState('');

  const getBootstrapBreakpoint = () => {
    const width = window.innerWidth;

    if (width >= 1400) {
      return 'xxl';
    } else if (width >= 1200) {
      return 'xl';
    } else if (width >= 992) {
      return 'lg';
    } else if (width >= 768) {
      return 'md';
    } else if (width >= 576) {
      return 'sm';
    } else if (width >= 400) {
      return 'xs';
    } else {
      return 'xxs';
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "g" || event.key === "G") {
        setIsGridVisible((prevState) => !prevState);
      }
    };

    const updateBreakpoint = () => {
      setBreakpoint(getBootstrapBreakpoint());
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", updateBreakpoint);
    
    // Set initial breakpoint
    updateBreakpoint();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  if (!isGridVisible) return null; // Não renderiza nada se a grade não estiver visível

  // Definindo o número de colunas com base no breakpoint
  const columns = {
    xxl: 12,
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    xxs: 12,
  }[breakpoint];

  return (
    <div className="grid-overlay">    
    <div className="container">
      <div className="row g-3 g-sm-4 g-md-4 g-lg-4 g-xl-5 justify-content-center">
        {Array.from({ length: columns }).map((_, index) => (
          <div
            key={index}
            className={`col-${Math.floor(12 / columns)} ${index === columns - 1 ? 'col-auto' : ''}`}>
            <div className="column"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default GuideGrid;
