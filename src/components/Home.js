import React from "react";
import "./Home.css"; 
import logo from "../assets/images/LogoReciclaTechAtibaia.png"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container-texto">
        <h1>Conheça a <span className="highlight">ReciclaTech Atibaia</span></h1>
        <p>
          Bem-vindo ao ReciclaTech, o seu parceiro em Atibaia para o descarte responsável de resíduos eletrônicos.
        </p>
        <p>
          Nosso compromisso é promover práticas sustentáveis no descarte de lixo eletrônico, contribuindo para um ambiente mais limpo e sustentável.
        </p>
        <p>
          Conhece algum posto de coleta?
        </p>
        <Link to="/novo-posto" className="btn-pontos-coleta">
            Cadastre um novo ponto de Coleta
        </Link>
      </div>

      {/* Wrapper ao redor da imagem */}
      <div className="home-image-wrapper">
        <img src={logo} alt="Logo ReciclaTech" className="home-image" />
      </div>
    </div>
  );
};

export default Home;
