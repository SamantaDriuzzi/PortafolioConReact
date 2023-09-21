import "../../scss/componentes/contacto/contacto.scss";
import Icono from "./iconos/icono";
import dataIcono from "../../constantes/dataIcono";
import { useEffect, useState } from "react";
import Loader from "../../bibliotecaUI/loader";

const Contacto = () => {
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
    <section className="contacto-banner">
      <div className="contenedor-banner">
        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">Contacto</h2>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="contenedor-iconos">
          {dataIcono.map((icono, index) => (
            <div className="icono" key={`${index}_${icono.nombre}`}>
              <Icono
                archivo={icono.svg}
                nombre={icono.nombre}
                enlace={icono.URL}
                tooltip={icono.tooltip}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default Contacto;
