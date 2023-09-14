import "../../scss/componentes/inicio/inicio.scss";
import AnimacionEstrellas from "./animacionEstrellas";
import BotonLink from "../../bibliotecaUI/botonLink.js";
import MaquinaEscribir from "../../bibliotecaUI/maquinaEscribir";

const Inicio = () => {
  return (
    <section className="seccionHome">
      <div className="contenedor-maquina-escribir">
        <MaquinaEscribir texto="Hola! Bienvenidx a parte de mi galaxia..." />
      </div>
      <div className="contenedor-btn-link">
        <BotonLink titulo={"ver CV"} toLink={"url"} />
      </div>
      <AnimacionEstrellas />
    </section>
  );
};

export default Inicio;
