import React from "react";
import { Tooltip } from "react-tooltip";
import "../../../scss/componentes/contacto/iconos/icono.scss";

function Icono({ archivo, enlace, nombre, tooltip }) {
  return (
    <div>
      <a
        data-tooltip-id={`tooltip-icono-${nombre}`}
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={archivo} alt={nombre} />
      </a>
      <Tooltip
        id={`tooltip-icono-${nombre}`}
        content={tooltip}
        place="left"
        className="icono-tooltip"
      />
    </div>
  );
}

export default Icono;
