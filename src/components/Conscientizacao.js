// src/components/Conscientizacao.js
import React from "react";

const Conscientizacao = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Por que se importar com o lixo eletrônico?</h2>
      <p>
        O descarte incorreto de lixo eletrônico pode liberar metais pesados no solo e na água,
        prejudicando a saúde humana e o meio ambiente. Componentes como baterias, placas e
        monitores contêm substâncias tóxicas que precisam de tratamento adequado.
      </p>
      <p>
        Sempre que possível, encaminhe seus eletrônicos para postos de coleta especializados.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/32/Ewaste.jpg"
        alt="Lixo eletrônico"
        style={{ width: "100%", maxWidth: "600px", marginTop: "1rem" }}
      />
    </div>
  );
};

export default Conscientizacao;

