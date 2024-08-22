import React from "react";
import "../../scss/componentes/habilidades/habilidades.scss";
import BarraProgreso from "./barraProgreso";
import {
  habilidadesBlandas,
  habilidadesDuras,
} from "../../constantes/dataHabilidades";

const Habilidades = () => {
  return (
    <section className="habilidades-banner">
      <div className="contenedor-banner">
        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">Mis habilidades</h2>
        </div>
        <div className="contenedor-barras">
          {habilidadesDuras.map((elem, index) => (
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
