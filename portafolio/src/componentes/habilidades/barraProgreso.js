import React, { useState, useEffect } from "react";
import "../../scss/componentes/habilidades/barraProgreso.scss";

const BarraProgreso = ({ habilidad, porcentaje }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(porcentaje);
  }, [porcentaje]);

  return (
    <div className="barra-progreso">
      <div className="habilidad">{habilidad}</div>
      <div className="progreso">
        <div className="progreso-interno" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default BarraProgreso;
