import React from "react";
import "../../scss/componentes/barraNavegacion/navbar.scss";
import ComponenteLogo from "./logo/componenteLogo";

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
  const secciones = [
    "Inicio",
    "Proyectos",
    "Habilidades",
    "Sobre mi",
    "Contacto",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {windowWidth >= minWidthToShowSvg && <ComponenteLogo />}
      </div>
      <div className="navbar-right">
        {secciones.map((seccion, index) => (
          <button key={`${index}_${seccion}`} className="nav-button">
            {seccion}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
