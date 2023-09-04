import "./App.css";
import SobreMi from "./components/about/sobreMi";
import Navbar from "./components/header/navbar";
import Home from "./components/home/home";
import ProyectosBanner from "./components/proyects/proyectosBanner";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SobreMi />
      <ProyectosBanner />
    </div>
  );
}
