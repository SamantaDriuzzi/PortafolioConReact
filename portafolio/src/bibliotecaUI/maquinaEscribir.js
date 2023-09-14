import React, { useEffect, useState } from "react";
import "../scss/bibliotecaUI/maquinaEscribir.scss";

const MaquinaEscribir = ({ texto, delay = 100 }) => {
  const [textoDinamico, setTextoDinamico] = useState("");
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const temporizador = setInterval(() => {
      if (indiceActual < texto.length) {
        setTextoDinamico(
          (textoDinamicoPrevio) => textoDinamicoPrevio + texto[indiceActual]
        );
        setIndiceActual((indexPrevio) => indexPrevio + 1);
      } else {
        clearInterval(temporizador);
      }
    }, delay);

    return () => {
      clearInterval(temporizador);
    };
  }, [texto, delay, indiceActual]);

  return <span className="frase-maquina-escribir">{textoDinamico}</span>;
};

export default MaquinaEscribir;
