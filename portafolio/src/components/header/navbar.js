import React from "react";
import "../../scss/components/navbar.scss";
import SvgComponent from "./logo/svgComponent";

/**
 * Este componente toma el ancho de la pantalla del navegador
 * y luego renderiza o no el componente 'SvgComponent'. En el caso
 * de que sea menor a 768px, el logo no se renderiza.
 * Esto es para no robar mas espacio a los demás elementos de la navbar.
 * @returns
 */
const Navbar = () => {
  const windowWidth = window.innerWidth;
  const minWidthToShowSvg = 768;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {windowWidth >= minWidthToShowSvg && <SvgComponent />}
      </div>
      <div className="navbar-right">
        <button className="nav-button">Inicio</button>
        <button className="nav-button">Proyectos</button>
        <button className="nav-button">Habilidades</button>
        <button className="nav-button">Sobre mi</button>
        <button className="nav-button">Contacto</button>
      </div>
    </nav>
  );
};

export default Navbar;
