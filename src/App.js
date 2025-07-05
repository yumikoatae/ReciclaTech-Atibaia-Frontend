import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LocaisColeta from "./components/LocaisColeta";
import MapaColeta from "./components/MapaColeta";
import Conscientizacao from "./components/Conscientizacao";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#f5f5f5", display: "flex", gap: "1rem" }}>
        <Link to="/">Início</Link>
        <Link to="/conscientizacao">Conscientização</Link>
        <Link to="/locais">Locais de Coleta</Link>
        <Link to="/mapa">Mapa</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1 style={{ padding: "2rem" }}>Bem-vindo ao ReciclaTech ♻️</h1>} />
        <Route path="/conscientizacao" element={<Conscientizacao />} />
        <Route path="/locais" element={<LocaisColeta />} />
        <Route path="/mapa" element={<MapaColeta />} />
      </Routes>
    </Router>
  );
}

export default App;

