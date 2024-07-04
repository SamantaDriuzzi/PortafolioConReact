import BotonLink from "../../bibliotecaUI/botonLink";
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../../scss/componentes/proyectos/modal.scss';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ModalProyecto = ({ proyecto, onClose }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="modal-proyecto">
      <div className="contenido">
        <button className="cerrar-modal" onClick={onClose}>X</button>
        <h2>{proyecto.name}</h2>
        {/* <img src={proyecto.imagen} alt={proyecto.name} /> */}
        <Swiper
        style={{
          '--swiper-navigation-color': '#ff9700',
          '--swiper-pagination-color': '#ff9700',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {proyecto.arrImagenes.map((imagen, index) => (
          <SwiperSlide key={index}>
            <img src={imagen}  alt={proyecto.name}/>
          </SwiperSlide>
        ))}
        
      </Swiper>
        <hr />
        <p className="descripcion">{proyecto.descripcion}</p>
        <div className="contenedor-logos-modal">
          {proyecto.logos.map((logo, index) => (
          <div className="logo-contenedor">
             <div key={index} className="logo">
              {logo}
            </div>
            <div className="tec">{proyecto.tecnologias[index]}</div>
          </div>
           
          ))}
        </div>
       
        <div className="contenedor-botonLink">
          <BotonLink titulo="Ver proyecto" toLink={proyecto.link} />
        </div>
      </div>
    </div>
  );
};

export default ModalProyecto;
