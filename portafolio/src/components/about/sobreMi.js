import dataSobreMi from "./dataSobreMi";
import "../../scss/components/sobreMi.scss";

const SobreMi = () => {
  return (
    <section className="seccionSobreMi">
      <h1 className="nombre">
        {dataSobreMi.nombre} {dataSobreMi.apellido}
      </h1>
      <img
        className="imgPerfil"
        src={dataSobreMi.imagen}
        alt="Foto de perfil"
      />
      <h3 className="descripcion">{dataSobreMi.descripcion}</h3>
    </section>
  );
};

export default SobreMi;
