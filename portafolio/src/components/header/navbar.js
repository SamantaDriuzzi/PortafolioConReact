import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">{/* Componente Logo */}</div>
      <div className="navbar-right">
        {/* Botones de navegación */}
        <button className="nav-button">Inicio</button>
        <button className="nav-button">Proyectos</button>
        <button className="nav-button">Contacto</button>
      </div>
    </nav>
  );
};

export default Navbar;
