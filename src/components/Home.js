import React from "react";
import "./Home.css";
import logo from "../assets/images/LogoReciclaTechAtibaia.png";
import { Link } from "react-router-dom";

const Home= () => {
  return (
    <section className="home-section">
      <div className="home-section__content">
        <h1 className="home-section__title">
          Conheça a <span className="home-section__highlight">ReciclaTech Atibaia</span>
        </h1>
        <p className="home-section__text">
          Bem-vindo ao ReciclaTech, o seu parceiro em Atibaia para o descarte responsável de resíduos eletrônicos.
        </p>
        <p className="home-section__text">
          Nosso compromisso é promover práticas sustentáveis no descarte de lixo eletrônico, contribuindo para um ambiente mais limpo e sustentável.
        </p>
        <p className="home-section__text">Conhece algum posto de coleta?</p>
        <Link to="/novo-posto" className="btn home-section__btn">
          Cadastre um novo ponto de Coleta
        </Link>
      </div>

      <div className="home-section__image-wrapper">
        <img src={logo} alt="Logo ReciclaTech" className="home-section__image" />
      </div>
    </section>
  );
};

export default Home