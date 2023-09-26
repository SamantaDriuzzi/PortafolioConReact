import "../../scss/componentes/contacto/contacto.scss";
import Icono from "./iconos/icono";
import dataIcono from "../../constantes/dataIcono";
import Loader from "../../bibliotecaUI/loader";
import useVelocidadConexion from "../../hooks/useVelocidadConexion";

const Contacto = () => {
  const loading = useVelocidadConexion();

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
