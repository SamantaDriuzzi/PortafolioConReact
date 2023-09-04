import dataSobreMi from "./dataSobreMi";
import "../../scss/componentes/sobreMi/sobreMi.scss";

const SobreMi = () => {
  return (
    <section className="seccionSobreMi" id="sobreMI">
      <img
        className="imgPerfil"
        src={dataSobreMi.imagen}
        alt="Foto de perfil"
      />
      <h3 className="saludo">{dataSobreMi.saludo}</h3>
      <h1 className="nombre">
        {dataSobreMi.nombre} {dataSobreMi.apellido}
      </h1>

      <div className="contenedor-descripcion">
        <h3 className="descripcion">
          {dataSobreMi.descripcion[0]}
          <br />
          {dataSobreMi.descripcion[1]}
        </h3>
      </div>
    </section>
  );
};

export default SobreMi;
