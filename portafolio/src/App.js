import "./App.css";
import SobreMi from "./components/about/sobreMi";
import Navbar from "./components/header/navbar";
import ProyectosBanner from "./components/proyects/proyectosBanner";

export default function App() {
  return (
    <div>
      <Navbar />
      <SobreMi />
      <ProyectosBanner />
    </div>
  );
}
