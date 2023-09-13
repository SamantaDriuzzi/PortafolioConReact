import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/effect-cards";
import "../../scss/componentes/proyectos/proyectos.scss";
import { EffectCards } from "swiper/modules";
import listaDeProyectos from "../../constantes/listaDeProyectos";
import BotonLink from "../../bibliotecaUI/botonLink";

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
      <BotonLink
        titulo={"Ver proyecto en Github"}
        toLink={listaDeProyectos[proyectoActual].githubLink}
      />
    </div>
  );
}
