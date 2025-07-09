import React from "react";
import { Link } from "react-router-dom";
import "./Conscientizacao.css";

const Conscientizacao = () => {
  return (
    <section className="consc-section">
      <h3 className="consc-title">
        <span role="img" aria-label="Manual icon">📖</span> Manual de Descarte do Lixo Eletrônico
      </h3>
      
      <div className="consc-content">
        <div className="consc-box">
          <h4>O QUE É LIXO ELETRÔNICO?</h4>
          <p>
            Lixo eletrônico, também conhecido como e-lixo, refere-se a qualquer tipo de equipamento elétrico ou eletrônico descartado, abrangendo desde computadores e smartphones até televisores e eletrodomésticos.
          </p>

          <h4>QUAL É O PROBLEMA DO LIXO ELETRÔNICO?</h4>
          <p>
            O lixo eletrônico contém substâncias tóxicas e sua rápida obsolescência gera um problema ambiental. O descarte inadequado contribui para a perda de recursos valiosos e a contaminação do ambiente. Reciclagem e conscientização são essenciais para enfrentar esse desafio.
          </p>
        </div>

        <div className="consc-box">
          <h4>ENTÃO, COMO FAÇO PARA DESCARTAR?</h4>
          <p>Para descartar corretamente o lixo eletrônico, siga estas etapas:</p>
          <ol>
            <li>Verificar os pontos de coleta autorizados na sua região</li>
            <li>Doação ou reutilização</li>
            <li>Limpar os dados pessoais</li>
            <li>Desconectar baterias e cabos</li>
            <li>Evitar o descarte no lixo comum</li>
          </ol>

          <Link to="/locais" className="consc-btn">
            Ver Pontos de Coleta
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Conscientizacao;