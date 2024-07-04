import React, { useState } from "react";
import ModalProyecto from "./modal";
import listaDeProyectos from "../../constantes/listaDeProyectos";

const Proyectos = () => {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  const cerrarModal = () => {
    setProyectoSeleccionado(null);
  };

  return (
    <div className="contenedor-proyectos">
      {listaDeProyectos.map((proyecto) => (
        <div className="proyecto" key={proyecto.name}>
          <img
            className="imagen"
            src={proyecto.imagen}
            alt={proyecto.name}
            onClick={() => abrirModal(proyecto)}
          />
          <div className="info-proyecto">
            <h4 className="nombre-proyecto">{proyecto.name}</h4>
            <div className="contenedor-logos">
              {proyecto.logos.map((logo, index) => (
                <div key={`${index}_${logo}`} className="logo">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      {proyectoSeleccionado && (
        <ModalProyecto
          proyecto={proyectoSeleccionado}
          onClose={cerrarModal}
        />
      )}
    </div>
  );
};

export default Proyectos;
