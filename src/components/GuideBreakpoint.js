"use client";
import { useEffect, useState } from "react";

const GuideBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [isVisible, setIsVisible] = useState(false); // Controle de visibilidade

  const breakpoints = {
    xxs: { range: "Abaixo de 400px", devices: "Celulares muito pequenos", color: "#C62828" }, // Vermelho escuro
    xs: { range: "400px até 575px", devices: "Celulares pequenos", color: "#F57F17" }, // Laranja escuro
    sm: { range: "576px até 767px", devices: "Tablets e celulares maiores", color: "#FFB300" }, // Amarelo
    md: { range: "768px até 991px", devices: "Tablets em paisagem, laptops pequenos", color: "#2E7D32" }, // Verde escuro
    lg: { range: "992px até 1199px", devices: "Laptops e desktops pequenos", color: "#1976D2" }, // Azul
    xl: { range: "1200px até 1399px", devices: "Desktops grandes", color: "#512DA8" }, // Roxo escuro
    xxl: { range: "1400px e acima", devices: "Monitores muito grandes", color: "#D32F2F" }, // Vermelho
  };
  

  const getBootstrapBreakpoint = () => {
    const width = window.innerWidth;

    if (width >= 1400) return "xxl";
    if (width >= 1200) return "xl";
    if (width >= 992) return "lg";
    if (width >= 768) return "md";
    if (width >= 576) return "sm";
    if (width >= 400) return "xs"; 
    if(width <=399) return "xxs";
  };

  const updateBreakpointInfo = () => {
    const currentBreakpoint = getBootstrapBreakpoint();
    setBreakpoint(currentBreakpoint);
    setScreenSize(window.innerWidth + "px");
  };

  useEffect(() => {
    updateBreakpointInfo();
    window.addEventListener("resize", updateBreakpointInfo);

    const handleKeyDown = (event) => {
      if (event.key === "b" || event.key === "B") {
        setIsVisible((prevState) => !prevState);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", updateBreakpointInfo);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentBreakpointInfo = breakpoints[breakpoint];

  if (!isVisible) return null;

  return (
    <div
      className="breakpoint-info"
      style={{ backgroundColor: currentBreakpointInfo.color }} // Muda a cor de fundo
    >
      <p>
        <strong>{breakpoint}</strong>
        <br />
        <strong>{screenSize}</strong>
      </p>

      {currentBreakpointInfo && (
        <>
          <strong>{currentBreakpointInfo.range}</strong>
          <br />
          {currentBreakpointInfo.devices}
        </>
      )}
    </div>
  );
};

export default GuideBreakpoint;
