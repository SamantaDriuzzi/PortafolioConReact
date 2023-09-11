import React from "react";
import "../../scss/componentes/barraNavegacion/navbar.scss";
import ComponenteLogo from "./logo/componenteLogo";
import { Link, Outlet } from "react-router-dom";

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
    { label: "Inicio", path: "/" },
    { label: "Proyectos", path: "/proyectos" },
    { label: "Habilidades", path: "/habilidades" },
    { label: "Sobre mi", path: "/sobreMi" },
    { label: "Contacto", path: "/contacto" },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          {windowWidth >= minWidthToShowSvg && <ComponenteLogo />}
        </div>
        <div className="navbar-right">
          {secciones.map((seccion, index) => (
            <Link
              key={`${index}_${seccion.label}`}
              to={seccion.path}
              className="nav-link"
            >
              {seccion.label}
            </Link>
          ))}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
