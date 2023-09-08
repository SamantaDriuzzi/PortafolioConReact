import SobreMi from "./componentes/sobreMi/sobreMi";
import Navbar from "./componentes/barraNavegacion/navbar";
import ProyectosBanner from "./componentes/proyectos/proyectosBanner";
import Home from "./components/home/home";
import Contacto from "./componentes/contacto/contacto";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SobreMi />
      <ProyectosBanner />
      <Contacto />
    </div>
  );
}
