import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import "./App.Module.css";
import Footer from "./components/Footer/Footer"; 
import Areas from "./components/Areas/Areas";
import Contato from "./components/Contato/Contato";
import Clientes from "./components/Clientes/Clientes";
import Trabalhos from "./components/Trabalhos/Trabalhos";

export default function App() {
  return (
    <div className="fundo">
    <Router>
      <div className="layout-container">
      <NavbarComponent />
      <div className="content"> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Areas" element={<Areas />} />
          <Route path="/Trabalhos" element={<Trabalhos />} />
          <Route path="/Clientes" element={<Clientes />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
        <Footer />  
      </div>
      </div>
      </Router>
      </div>
   );
}

