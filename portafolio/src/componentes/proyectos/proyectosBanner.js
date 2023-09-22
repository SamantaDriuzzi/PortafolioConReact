import React, { useEffect, useState } from "react";
import Proyectos from "./proyectos";
import "../../scss/componentes/proyectos/proyectos.scss";
import Loader from "../../bibliotecaUI/loader";

const ProyectosBanner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verificaVelocidadConexion = () => {
      const conexión =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;

      if (conexión) {
        const velocidadMbps = conexión.downlink;

        if (velocidadMbps < 2) {
          setLoading(true);
        } else {
          setLoading(false);
        }
      }
    };

    verificaVelocidadConexion();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="proyectos-banner">
      <div className="contenedor-banner">
        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">Mis proyectos</h2>
        </div>
        <p className="parrafo-seccion">
          Explora algunos de los proyectos en los que he trabajado.
        </p>
      </div>
      {loading ? <Loader /> : <Proyectos />}
    </section>
  );
};

export default ProyectosBanner;
