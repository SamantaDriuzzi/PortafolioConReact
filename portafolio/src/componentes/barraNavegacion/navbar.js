import React, { useEffect, useState } from "react";
import "../../scss/componentes/barraNavegacion/navbar.scss";
import BurguerButton from "./menu/botonHambur";
import { Link, Outlet } from "react-router-dom";
import ComponenteLogo from "./logo/componenteLogo";

function Navbar() {
  //** El useEffect se utiliza para realizar dos tareas principales:
  // -Obtener el ancho de la ventana inicial:
  //    Inicializamos el estado #windowWidth con el ancho de la ventana
  //    del navegador al cargar el componente.
  // -Escuchar cambios en el tamaño de la ventana:
  //    Cada vez que cambie el tamaño de la ventana del navegador,
  //    se llamará a la función #handleResize.
  //*/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const minWidthToShowSvg = 768;
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  const isSmallScreen = windowWidth < minWidthToShowSvg;
  return (
    <div>
      <div className={`nav-container ${clicked ? "active" : ""}`}>
        <div className="navbar-left">
          {windowWidth >= minWidthToShowSvg && <ComponenteLogo />}
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
