import "../../scss/componentes/contacto/contacto.scss";
import Icono from "./iconos/icono";
import dataIcono from "./iconos/dataIcono";

const Contacto = () => {
  return (
    <section className="contacto-banner">
      <div className="contenedor-banner">
        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">Contacto</h2>
        </div>
      </div>
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
        ;
      </div>
    </section>
  );
};
export default Contacto;
