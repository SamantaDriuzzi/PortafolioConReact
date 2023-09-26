import dataSobreMi from "../../constantes/dataSobreMi";
import "../../scss/componentes/sobreMi/sobreMi.scss";

const SobreMi = () => {
  return (
    <section className="seccionSobreMi" id="sobreMI">
      <div className="contenedor-saludo">
        <div className="saludo">
          <ul>
            <li>{dataSobreMi.saludo[0]}</li>
            <li> {dataSobreMi.saludo[1]}</li>
            <li>{dataSobreMi.nombre}</li>
          </ul>
        </div>
      </div>
      <div className="contenedor-descripcion">
        <div className="descripcion">
          {dataSobreMi.descripcion[0]}
          <br />
          <br />
          {dataSobreMi.descripcion[1]}
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
