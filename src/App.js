import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import CV from "./Pages/CV";
import Error404 from "./Pages/Error404";
import Home from './Pages/Home';

function App() {
  return (
    <div style={{ backgroundColor: "#19124d45" }} className="simon">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CV" element={<CV />} />
          <Route path ="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
