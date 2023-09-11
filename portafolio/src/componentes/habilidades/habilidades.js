import React from "react";
import "../../scss/componentes/habilidades/habilidades.scss";
import BarraProgreso from "./barraProgreso";

const Habilidades = () => {
  const habilidades = [
    { habilidad: "HTML y CSS", porcentaje: 90 },
    { habilidad: "JavaScript", porcentaje: 75 },
    { habilidad: "React", porcentaje: 85 },
    { habilidad: "SASS", porcentaje: 90 },
  ];
  const habilidadesBlandas = [
    { habilidad: "Autogestión", porcentaje: 90 },
    { habilidad: "Curiosidad", porcentaje: 95 },
    { habilidad: "Trabajo en equipo", porcentaje: 35 },
    { habilidad: "Creatividad", porcentaje: 90 },
  ];

  return (
    <section className="habilidades-banner">
      <div className="contenedor-banner">
        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">Mis habilidades</h2>
        </div>
        <div className="contenedor-barras">
          {habilidades.map((elem, index) => (
            <BarraProgreso
              key={`${index}_${elem.habilidad}`}
              habilidad={elem.habilidad}
              porcentaje={elem.porcentaje}
            />
          ))}
        </div>
        <div className="contenedor-barras">
          {habilidadesBlandas.map((elem, index) => (
            <BarraProgreso
              key={`${index}_${elem.habilidad}`}
              habilidad={elem.habilidad}
              porcentaje={elem.porcentaje}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Habilidades;
