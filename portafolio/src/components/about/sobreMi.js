import dataSobreMi from "./dataSobreMi";
import "../../scss/components/sobreMi.scss";

const SobreMi = () => {
  return (
    <section className="seccionSobreMi" id="sobreMI">
      <h3 className="saludo">{dataSobreMi.saludo}</h3>
      <h1 className="nombre">
        {dataSobreMi.nombre} {dataSobreMi.apellido}
      </h1>
      <img
        className="imgPerfil"
        src={dataSobreMi.imagen}
        alt="Foto de perfil"
      />
      <div className="contenedor-descripcion">
        <h3 className="descripcion">{dataSobreMi.descripcion}</h3>
        <h3 className="descripcion">{dataSobreMi.segundaDescripcion}</h3>
      </div>
    </section>
  );
};

export default SobreMi;
