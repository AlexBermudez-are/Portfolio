import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import CV from "./Pages/CV";
import Error404 from "./Pages/Error404";
import Home from './Pages/Home';
import ProyectoBlog from "./Pages/ProyectoBlog";
import ProyectoONG from "./Pages/ProyectoONG";
import ProyectoSobreCafe from "./Pages/ProyectoSobreCafe";
import ProyectoSuperheroes from "./Pages/ProyectoSuperheroes";

function App() {
  return (
    <div style={{ backgroundColor: "#7267cb" }} className="simon">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo-Sobre-Cafe" element={<ProyectoSobreCafe />} />
          <Route path="/Proyecto-Superheroes" element={<ProyectoSuperheroes />} />
          <Route path="/Proyecto-Blog" element={<ProyectoBlog />} />
          <Route path="/Proyecto-ONG" element={<ProyectoONG />} />
          <Route path="/CV" element={<CV />} />
          <Route path ="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
