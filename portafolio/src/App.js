import { Route, Routes } from "react-router-dom";
import Navbar from "./componentes/barraNavegacion/navbar";
import Inicio from "./componentes/inicio/inicio";
import ProyectosBanner from "./componentes/proyectos/proyectosBanner";
import Habilidades from "./componentes/habilidades/habilidades";
import SobreMi from "./componentes/sobreMi/sobreMi";
import Contacto from "./componentes/contacto/contacto";
import Loader from "./bibliotecaUI/loader";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/proyectos"
          element={<ProyectosBanner />}
          loader={() => <Loader />}
        />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}
