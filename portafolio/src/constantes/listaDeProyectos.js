import bear from "../imagenes/mismoTamaño/bear-capture-proyect 1.png";
import market from "../imagenes/mismoTamaño/product-pag-capture 1.png";
import tribute from "../imagenes/mismoTamaño/tributePag-capture-project 1.png";
import portfolio from "../imagenes/mismoTamaño/portfolio-project-capture 1.png";
import challengeButton from "../imagenes/mismoTamaño/challenge-button.PNG";
import challengeCat from "../imagenes/mismoTamaño/catWikiChallenge.png";

const proyectosLista = [
  {
    key: "challengeCat",
    descripcion:
      "Desafio de 'DevChallenges.Io'. Página para búsqueda de razas de gatos",
    imagen: challengeCat,
    githubLink: "https://cat-wiki-challenge-gilt.vercel.app/",
  },
  {
    key: "challengeButton",
    descripcion:
      "Desafio de 'DevChallenges.Io'. Creación de coleción de botones",
    imagen: challengeButton,
    githubLink: "https://challengebutton.vercel.app/",
  },

  {
    key: "bear",
    descripcion:
      "Mi primer transformación con CSS para posicionar y dimensionar un oso, crear un fondo y animarlo.",
    imagen: bear,
    githubLink: "https://github.com/SamantaDriuzzi/Bear-Transform-CSS",
  },
  {
    key: "market",
    descripcion: "Página de inicio de una tienda web.",
    imagen: market,
    githubLink: "https://github.com/SamantaDriuzzi/Product-Leanding-Page",
  },
  {
    key: "tributePage",
    descripcion:
      "Pagina tributo para practicas e implementación de las bases en HTML y CSS",
    imagen: tribute,
    githubLink: "https://github.com/SamantaDriuzzi/TributePag",
  },
  {
    key: "portfolioHTML",
    descripcion:
      "Desafio de 'freeCodeCamp' para perfeccionar mis habilidades en 'Diseño web responsivo'",
    imagen: portfolio,
    githubLink: "https://github.com/SamantaDriuzzi/PortFolio",
  },
];

export default proyectosLista;
