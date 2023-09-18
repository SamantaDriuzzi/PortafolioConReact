import React, { useState, useEffect } from "react";
import "../../scss/componentes/habilidades/barraProgreso.scss";
import { Tooltip } from "react-tooltip";

const BarraProgreso = ({ habilidad, porcentaje, tooltip }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(porcentaje);
  }, [porcentaje]);

  return (
    <div className="barra-progreso">
      <div className="habilidad">{habilidad}</div>
      <div className="progreso" data-tooltip-id={`tooltip-icono-${habilidad}`}>
        <div className="progreso-interno" style={{ width: `${width}%` }}></div>
      </div>
      <Tooltip
        id={`tooltip-icono-${habilidad}`}
        content={tooltip}
        place="bottom"
        className="icono-tooltip"
      />
    </div>
  );
};

export default BarraProgreso;
