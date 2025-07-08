import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Conheça a <span className="highlight">ReciclaTech Atibaia</span></h1>
      <p>
        Bem-vindo ao ReciclaTech, o seu parceiro em Atibaia para o descarte responsável de resíduos eletrônicos.
        Nosso compromisso é promover práticas sustentáveis no descarte de lixo eletrônico, contribuindo para um ambiente mais limpo e sustentável.
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4305/4305733.png"
        alt="Ilustração sustentável"
        className="home-image"
      />
    </div>
  );
};

export default Home;