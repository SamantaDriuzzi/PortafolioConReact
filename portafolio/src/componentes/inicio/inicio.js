import "../../scss/componentes/inicio/inicio.scss";
import AnimacionEstrellas from "./animacionEstrellas";
import BotonLink from "../../bibliotecaUI/botonLink.js";
// import MaquinaEscribir from "../../bibliotecaUI/maquinaEscribir";
// import galaxia from "../../imagenes/Iconos/Galaxia.svg";
// import usePantallaChica from "../../hooks/usePantallaChica";
import WordFlicker from "../../bibliotecaUI/maquinaDeEscribir2";

const Inicio = () => {
  // const { windowWidth, minWidth, isSmallScreen } = usePantallaChica();

  return (
    <section className="seccionHome">
      <WordFlicker />
      <div className="contenedor-saludo-inicio">
        {/* {windowWidth > minWidth && (
          // <MaquinaEscribir texto="Bienvenidx a un rincón de mi galaxia..." />
          // <WordFlicker />
        )} */}
        {/* <img
          src={galaxia}
          alt="Imagen galaxia"
          className={`galaxia-pantalla-grande 
            ${isSmallScreen ? "galaxia-pantalla-chica" : ""}`}
        /> */}
      </div>
      <div className="contenedor-btn-link">
        <BotonLink
          titulo={"Ver CV"}
          toLink={"https://drive.google.com/file/d/1BGO0pfcUNqrWmCVVcuTPBXDjccpzUhkM/view?usp=sharing"
          }
        />
      </div>
      <AnimacionEstrellas />
    </section>
  );
};

export default Inicio;
