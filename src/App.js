import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import LocaisColeta from "./components/LocaisColeta";
import Conscientizacao from "./components/Conscientizacao";
import FormularioPosto from "./components/FormularioPosto";
import logo from "./assets/images/LogoReciclaTechAtibaia.png";
import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="logo-container">
          <img src={logo} alt="Logo ReciclaTech" className="logo" />
        </div>

        <nav className="nav-bar">
          <Link to="/">Início</Link>
          <Link to="/conscientizacao">Conscientização</Link>
          <Link to="/locais">Locais de Coleta</Link>
          <Link to="/novo-posto">Novo Posto</Link>
        </nav>

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conscientizacao" element={<Conscientizacao />} />
            <Route path="/locais" element={<LocaisColeta />} />
            <Route path="/novo-posto" element={<FormularioPosto />} />
          </Routes>
        </div>

        <footer>
          <p>Feito por <strong>Yumiko Atae</strong></p>
          <p>
            <a href="https://github.com/yumikoatae" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="https://www.linkedin.com/in/yumiko-atae" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;


