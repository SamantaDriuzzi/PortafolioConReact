import React from "react";
import ProyectoCard from "./proyectoCard";
import listaDeProyectos from "./listaDeProyectos";
import "../../scss/components/proyectos.scss";

export default function Proyectos() {
  return (
    <div className="lista-proyectos">
      {listaDeProyectos.map((proyecto) => (
        <ProyectoCard
          key={proyecto.id}
          nombre={proyecto.nombre}
          descripcion={proyecto.descripcion}
          imagen={proyecto.imagen}
        />
      ))}
    </div>
  );
}
