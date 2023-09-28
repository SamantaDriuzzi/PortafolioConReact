import React, { useState } from "react";
import "../../scss/componentes/barraNavegacion/navbar.scss";
import BurguerButton from "./menu/botonHambur";
import { Link, Outlet } from "react-router-dom";
import ComponenteLogo from "./logo/componenteLogo";
import usePantallaChica from "../../hooks/usePantallaChica";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const secciones = [
    { label: "Inicio", path: "/" },
    { label: "Proyectos", path: "/proyectos" },
    { label: "Habilidades", path: "/habilidades" },
    { label: "Sobre mi", path: "/sobreMi" },
    { label: "Contacto", path: "/contacto" },
  ];
  const { windowWidth, minWidth, isSmallScreen } = usePantallaChica();

  return (
    <div>
      <div className={`nav-container ${clicked ? "active" : ""}`}>
        <div className="navbar-left">
          {windowWidth >= minWidth && <ComponenteLogo />}
        </div>
        <div className={`links ${clicked ? "active" : ""}`}>
          {secciones.map((seccion, index) => (
            <Link
              key={`${index}_${seccion.label}`}
              to={seccion.path}
              className="link"
              onClick={isSmallScreen ? handleClick : undefined}
            >
              {seccion.label}
            </Link>
          ))}
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`bg-div ${clicked ? "active" : ""}`}></div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
