import React from "react";
import Proyectos from "./proyectos";
import "../../scss/components/proyectos.scss";

const ProyectosBanner = () => {
  return (
    <section className="proyectos-banner">
      <div className="contenedor-banner">
        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">Mis Proyectos</h2>
        </div>
        <p className="parrafo-seccion">
          Explora algunos de los proyectos en los que he trabajado.
        </p>
        <Proyectos />
      </div>
    </section>
  );
};

export default ProyectosBanner;
