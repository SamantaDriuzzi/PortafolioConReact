import "../../scss/componentes/inicio/inicio.scss";
import AnimacionEstrellas from "./animacionEstrellas";
import BotonLink from "../../bibliotecaUI/botonLink.js";
import MaquinaEscribir from "../../bibliotecaUI/maquinaEscribir";
import galaxia from "../../imagenes/Iconos/Galaxia.svg";

const Inicio = () => {
  return (
    <section className="seccionHome">
      <div className="contenedor-maquina-escribir">
        <MaquinaEscribir texto="¡Hola! Bienvenidx a un rincón de mi galaxia..." />
        <img src={galaxia} alt="SVG Alt Text" className="imagen-galaxia" />
      </div>
      <div className="contenedor-btn-link">
        <BotonLink
          titulo={"Ver CV"}
          toLink={
            "https://drive.google.com/file/d/1uZr96SOZop31JcOlWJkoqSLwUB8JWakw/view?usp=sharing"
          }
        />
      </div>
      <AnimacionEstrellas />
    </section>
  );
};

export default Inicio;
