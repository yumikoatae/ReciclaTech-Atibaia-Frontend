import React, { useEffect, useState } from "react";
import { getPostosDeColeta } from "../api";

const LocaisColeta = () => {
  const [postos, setPostos] = useState([]);

  useEffect(() => {
    getPostosDeColeta().then(setPostos).catch(console.error);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Postos de Coleta</h2>
      {postos.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {postos.map((posto) => (
            <li key={posto.id}>
              <strong>{posto.nome}</strong><br />
              {posto.endereco}<br />
              {posto.horario_funcionamento}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocaisColeta;

