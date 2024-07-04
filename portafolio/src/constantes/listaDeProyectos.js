import tribute from "../imagenes/mismoTamaño/tributePag-capture-project 1.png";
import portfolio from "../imagenes/mismoTamaño/portfolio-project-capture 1.png";
import board from "../imagenes/easytask/board.png";
import createTeam from "../imagenes/easytask/createTeam.png";
import easyTask from "../imagenes/easytask/easyTask.png";
import login from "../imagenes/easytask/login.png";
import home from "../imagenes/easytask/home.png";
import landing from "../imagenes/easytask/landingPage.png";
import newSprint from "../imagenes/easytask/newSprint.png";
import us from "../imagenes/easytask/us.png";
import task from "../imagenes/easytask/task.png";
import ecommerce from "../imagenes/ecommerce/ecommerce.png";
import shop from "../imagenes/ecommerce/shop.png";
import shop1 from "../imagenes/ecommerce/shop1.png";
import shop2 from "../imagenes/ecommerce/shop2.png";
import shop5 from "../imagenes/ecommerce/shop5.png";
import cat from "../imagenes/catwiki/cat.png";
import cat1 from "../imagenes/catwiki/cat1.png";
import cat2 from "../imagenes/catwiki/cat2.png";
import cat3 from "../imagenes/catwiki/cat3.png";
import cat4 from "../imagenes/catwiki/cat4.png";
import button from "../imagenes/button/button.png";
import button1 from "../imagenes/button/button1.png";
import button2 from "../imagenes/button/button2.png";
import bear from "../imagenes/bear/bear.png";
import bear1 from "../imagenes/bear/bear1.png";
import bear2 from "../imagenes/bear/bear2.png";
import market from "../imagenes/market/market.png";
import market1 from "../imagenes/market/market1.png";
import market2 from "../imagenes/market/market2.png";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare, FaGit, FaFigma, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiAuth0, SiExpress, SiRedux } from 'react-icons/si';


const proyectosLista = [
  {
    name: "EasyTask",
    descripcion: "EasyTask es una aplicación de gestión de tareas desarrollada como proyecto final del Bootcamp Henry. Este proyecto no solo nos permitió certificar el curso, sino que también colaboramos en equipo con otros cinco integrantes. Mi rol incluyó liderazgo en el equipo de Frontend, organización, y el desarrollo de habilidades blandas como empatía y comunicación efectiva. Contribuí al éxito del equipo asegurando que cumpliéramos con los objetivos del proyecto. Actualmente, estamos planificando mejoras y nuevas implementaciones para optimizar la aplicación.",
    imagen: easyTask,
    arrImagenes: [easyTask, landing, login,home,createTeam, newSprint, board, task, us],
    link: "https://easytask.vercel.app/",
    tecnologias: ["Next Js", "React", "Typescript","Tailwind", "Auth0", "Figma", "Git"],
    logos: [ <SiNextdotjs/>,<FaReact />, <SiTypescript />, <SiTailwindcss />, <SiAuth0 />, <FaFigma />, <FaGitAlt />],
  },
  {
    name: "E-commerce TechShop",
    descripcion: "TechShop es un proyecto de e-commerce desarrollado durante el módulo 4 del Bootcamp Henry, centrado en la especialización en Frontend. Este proyecto me permitió aprender y aplicar tecnologías avanzadas para crear una plataforma robusta y moderna. Utilizé Next.js para el enrutamiento y la renderización del lado del servidor, React para la construcción de la interfaz de usuario interactiva, y TypeScript para añadir tipado estático y mejorar la escalabilidad del código. Redux se empleó para la gestión del estado global, mientras que Tailwind CSS facilitó el diseño y la estilización con un enfoque utility-first. Durante el desarrollo, se utilizó Figma para prototipar y diseñar la interfaz de usuario de manera colaborativa. En el backend, se implementaron Express y TypeORM para construir y gestionar la API y la base de datos respectivamente.",
    imagen: ecommerce,
    arrImagenes: [ecommerce, shop, shop1, shop2, shop5],
    link: "https://e-commerce-m4-henry-hqoh.vercel.app/",
    tecnologias: ["Next Js", "React",  "Typescript", "Redux", "Tailwind", "Figma", "Express", "TypeORM"],
    logos: [ <SiNextdotjs/>, <FaReact />, <SiTypescript />,<SiRedux />, <SiTailwindcss />, <FaFigma />, <FaDatabase />],
  },
  {
    name: "Challenge CatWiki",
    descripcion:
      "Desafio de 'DevChallenges.Io'. Página para búsqueda de razas de gatos",
    imagen: cat,
    arrImagenes: [cat, cat1, cat2, cat3, cat4],
    link: "https://cat-wiki-challenge-gilt.vercel.app/",
    tecnologias: ["React", "JavaScript", "CSS", "Express"],
    logos: [ <FaReact />, <FaJsSquare />, <FaCss3Alt />, <SiExpress />],
  },
  {
    name: "Challenge Button Library",
    descripcion:
      "Desafio de 'DevChallenges.Io'. Ejemplo de una librería de botones a partir de un solo botón reutilizable.",
    imagen: button,
    arrImagenes: [button, button1, button2],
    link: "https://challengebutton.vercel.app/",
    tecnologias: ["React","JavaScript", "CSS",],
    logos: [ <FaReact />, <FaJsSquare />, <FaCss3Alt />],
  },

  {
    name: "Bear Animation",
    descripcion:
      "Mi primer transformación con CSS para posicionar y dimensionar un oso, crear un fondo y animarlo.",
    imagen: bear,
    arrImagenes: [bear, bear1, bear2],
    link: "https://bear-transform-css.vercel.app/",
    tecnologias: ["CSS", "HTML"],
    logos: [<FaCss3Alt />, <FaHtml5 />],
  },
  {
    name: "Market",
    descripcion: "Página de inicio de una tienda web.",
    imagen: market,
    arrImagenes: [market, market1, market2],
    link: "https://product-leanding-page.vercel.app/",
    tecnologias: ["CSS", "HTML"],
    logos: [<FaCss3Alt />, <FaHtml5 />],
  }
];

export default proyectosLista;
