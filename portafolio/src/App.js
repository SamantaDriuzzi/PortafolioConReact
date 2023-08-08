import "./App.css";
import Proyectos from "./components/banner/proyectos";
import Navbar from "./components/header/navbar";

export default function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <banner>
        <Proyectos />
      </banner>
    </div>
  );
}
