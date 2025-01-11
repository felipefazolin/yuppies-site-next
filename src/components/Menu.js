"use client";
import Link from "next/link";
import Logo from "@components/Logo";
import MenuLinks from "@components/MenuLinks";
import MenuHamburguer from "./MenuHamburguer";

const Menu = ({ content, isOpen, toggleMenu, scrollPosition }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className={`menu-normal mt-3 menu-bg ${isOpen ? "active" : ""}`}>
        <nav className="menu-container ">
          <div className="logo-container">
            <Link href={"/"}>
              <Logo scrollPosition={scrollPosition} />
            </Link>
          </div>
          <div className="menu-links">
            <MenuLinks content={content} />
            <MenuHamburguer isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
