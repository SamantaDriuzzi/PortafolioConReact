import React from "react";

function Icono({ archivo, enlace, nombre }) {
  return (
    <a href={enlace} target="_blank" rel="noopener noreferrer">
      <img src={archivo} alt={nombre} />
    </a>
  );
}

export default Icono;
