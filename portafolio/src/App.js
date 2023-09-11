import SobreMi from "./componentes/sobreMi/sobreMi";
import Navbar from "./componentes/barraNavegacion/navbar";
import ProyectosBanner from "./componentes/proyectos/proyectosBanner";
import Inicio from "./componentes/inicio/inicio";
import Contacto from "./componentes/contacto/contacto";
import Habilidades from "./componentes/habilidades/habilidades";

export default function App() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <ProyectosBanner />
      <Habilidades />
      <SobreMi />
      <Contacto />
    </div>
  );
}
