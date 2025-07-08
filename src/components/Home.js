import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao <span className="highlight">ReciclaTech ♻️</span></h1>
      <p>Conectando pessoas, tecnologia e o meio ambiente para um futuro mais sustentável.</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4305/4305733.png"
        alt="Ilustração sustentável"
        className="home-image"
      />
    </div>
  );
};

export default Home;
