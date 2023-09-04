import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/effect-cards";
import "../../scss/componentes/proyectos/proyectos.scss";
import { EffectCards } from "swiper/modules";
import listaDeProyectos from "./listaDeProyectos";

export default function Proyectos() {
  /**
   * Esta función usa Swiper. Recorre la 'lista de proyectos' importada,
   * devuelve por cada objeto una tarjeta con una imagen, nombre y
   * descripción del proyecto.
   * Permite la inteacción con el usuario logrando deslizar cada tarjeta a ambos lados.
   */
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      loop="true"
    >
      {listaDeProyectos.map((proyecto) => (
        <SwiperSlide key={proyecto.key}>
          <img className="imagen" src={proyecto.imagen} alt={proyecto.nombre} />
          <div className="contenedor-descripcion-proyecto">
            <h3 className="nombre-proyecto">{proyecto.nombre}</h3>
            <h4 className="descripcion-proyecto">{proyecto.descripcion}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
