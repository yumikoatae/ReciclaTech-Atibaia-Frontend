import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import LocaisColeta from "./components/LocaisColeta";
import Conscientizacao from "./components/Conscientizacao";
import FormularioPosto from "./components/FormularioPosto";
import logo from "./assets/images/LogoReciclaTechAtibaia.png"; // Importando a imagem (substitua o nome do arquivo se necessário)
import "./App.css"; 

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center' }}>
          <img src={logo} alt="Logo ReciclaTech" style={{ maxWidth: '15%', height: 'auto', margin: '2rem 0 0 0' }} />
        </div>

        <nav style={{ padding: "1rem", background: "#f5f5f5", display: "flex", gap: "1rem", justifyContent: 'center' }}>
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

        {/* Rodapé */}
        <footer style={{
          backgroundColor: '#e0f2f1',
          textAlign: 'center',
          padding: '1rem',
          marginTop: '2rem',
          borderTop: '1px solid #ccc'
        }}>
          <p>Feito com 💚 por <strong>Yumiko Atae</strong></p>
          <p>
            <a href="https://github.com/yumikoatae" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
            <a href="https://www.linkedin.com/in/yumiko-atae" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

