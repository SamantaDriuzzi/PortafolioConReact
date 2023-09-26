import Proyectos from "./proyectos";
import "../../scss/componentes/proyectos/proyectos.scss";
import Loader from "../../bibliotecaUI/loader";
import useVelocidadConexion from "../../hooks/useVelocidadConexion";

const ProyectosBanner = () => {
  const loading = useVelocidadConexion();

  return (
    <section className="proyectos-banner">
      <div className="contenedor-banner">
        <div className="contenedor-titulo">
          <h2 className="titulo-seccion">Mis proyectos</h2>
        </div>
        <p className="parrafo-seccion">
          Explora algunos de los proyectos en los que he trabajado.
        </p>
      </div>
      {loading ? <Loader /> : <Proyectos />}
    </section>
  );
};

export default ProyectosBanner;
