import SobreMi from "./componentes/sobreMi/sobreMi";
import Navbar from "./componentes/barraNavegacion/navbar";
import ProyectosBanner from "./componentes/proyectos/proyectosBanner";

export default function App() {
  return (
    <div>
      <Navbar />
      <SobreMi />
      <ProyectosBanner />
    </div>
  );
}
