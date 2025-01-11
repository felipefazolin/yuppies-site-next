"use client";
import { useEffect, useState } from "react";
// BOOTSTRAP
import "@styles/bootstrap.css";
// STYLES
import "@styles/all.css";

//COMPONENTS
import GuideGrid from "@components/GuideGrid";
import Menu from "@components/Menu";

// JSON
import jsonMenu from "@contents/menu.json";
import Footer from "@components/Footer";
import MenuFull from "@components/MenuFull";
import GuideBreakpoint from "@components/GuideBreakpoint";

// MONTAGEM DO COMPONENTE ROOT LAYOUT
export default function RootLayout({ children }) {
  const contentMenu = jsonMenu;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    // Se o menu está fechando, rola para o topo
    if (!isOpen) {
      window.scrollTo(0, 0);
    }
    // Alterna o estado do menu
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Bloquear/desbloquear scroll quando o menu é aberto/fechado
    if (isOpen) {
      window.scrollTo(0, 0); // Rolando para o topo
    }
  }, [isOpen]);

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
    <html lang="pt" className={isOpen ? "no-scroll" : ""}>
      <body>
        <GuideGrid />
        <GuideBreakpoint />

        <Menu
          content={contentMenu}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          scrollPosition={scrollPosition}
        />

        <MenuFull content={contentMenu} isOpen={isOpen} />
        {/* {isOpen && <MenuFull />}  */}
        <div className="generalContainer">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
