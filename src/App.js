import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LocaisColeta from "./components/LocaisColeta";
import MapaColeta from "./components/MapaColeta";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/">Início</Link> | <Link to="/locais">Locais de Coleta</Link> | <Link to="/mapa">Mapa</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<h1 style={{ padding: "2rem" }}>Bem-vindo ao ReciclaTech ♻️</h1>} />
        <Route path="/locais" element={<LocaisColeta />} />
        <Route path="/mapa" element={<MapaColeta />} />
      </Routes>
    </Router>
  );
}

export default App;

