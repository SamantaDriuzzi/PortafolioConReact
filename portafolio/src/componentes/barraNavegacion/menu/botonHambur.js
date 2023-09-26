import React from "react";
import "../../../scss/componentes/barraNavegacion/menu/botonHambur.scss";

export default function BotonHambur(props) {
  return (
    <div
      onClick={props.handleClick}
      className={`nav-icon-5 ${props.clicked ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
