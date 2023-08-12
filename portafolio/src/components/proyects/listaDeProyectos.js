import bear from "../../images/mismoTamaño/bear-capture-proyect 1.png";
import market from "../../images/mismoTamaño/product-pag-capture 1.png";
import tribute from "../../images/mismoTamaño/tributePag-capture-project 1.png";
import portfolio from "../../images/mismoTamaño/portfolio-project-capture 1.png";

const proyectosLista = [
  {
    key: "bear",
    nombre: "Bear Animation",
    descripcion:
      "Esta es mi primera transformación con CSS para posicionar y dimensionar partes de un oso, crear un fondo y animarlo.",
    imagen: bear,
  },
  {
    key: "market",
    nombre: "Market Product-Page",
    descripcion: "Página de inicio de una tienda web.",
    imagen: market,
  },
  {
    key: "tributePage",
    nombre: "Tribute Page",
    descripcion:
      "Pagina tributo para practicas e implementación de los primeros conocimientos en HTML y CSS",
    imagen: tribute,
  },
  {
    key: "portfolioHTML",
    nombre: "Portfolio HTML",
    descripcion:
      "Con este desafio propuesto por 'freeCodeCamp' perfeccioné mis habilidades en 'Diseño web responsivo'",
    imagen: portfolio,
  },
];

export default proyectosLista;
