import Proyectos from "./proyectos";
import "../../scss/componentes/proyectos/proyectos.scss";
import Loader from "../../bibliotecaUI/loader";
import useVelocidadConexion from "../../hooks/useVelocidadConexion";

const ProyectosBanner = () => {
  const loading = useVelocidadConexion();

  return (
    <section className="proyectos-banner">
      {loading ? <Loader /> : <Proyectos />}
    </section>
  );
};

export default ProyectosBanner;
