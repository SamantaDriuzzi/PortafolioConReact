import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/effect-cards";
import "../../scss/componentes/proyectos/proyectos.scss";
import { EffectCards } from "swiper/modules";
import listaDeProyectos from "../../constantes/listaDeProyectos";

export default function Proyectos() {
  const [proyectoActual, setProyectoActual] = useState(0);

  const cambiarProyectoActual = (swiper) => {
    setProyectoActual(swiper.activeIndex);
  };

  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop="true"
        onSlideChange={(swiper) => cambiarProyectoActual(swiper)}
      >
        {listaDeProyectos.map((proyecto) => (
          <SwiperSlide key={proyecto.key}>
            <img
              className="imagen"
              src={proyecto.imagen}
              alt={proyecto.nombre}
            />
            <div className="contenedor-descripcion-proyecto">
              <h4 className="descripcion-proyecto">{proyecto.descripcion}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="boton-link">
        <a
          href={listaDeProyectos[proyectoActual].githubLink}
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          <span class="btn__circle"></span>
          <span class="btn__white-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon-arrow-right"
              viewBox="0 0 21 12"
            >
              <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
            </svg>
          </span>
          <span class="btn__text">Ver proyecto en GitHub</span>
        </a>
      </div>
    </div>
  );
}
