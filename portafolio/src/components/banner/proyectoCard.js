import React from "react";
import "../../scss/components/proyectos.scss";

function ProyectoCard({ nombre, descripcion, imagen }) {
  return (
    <div className="proyecto-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default ProyectoCard;
