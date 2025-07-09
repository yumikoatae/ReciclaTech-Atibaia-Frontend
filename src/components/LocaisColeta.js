import React, { useEffect, useState } from "react";
import { getPostosDeColeta } from "../api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import './LocaisColeta.css'; // Importar o arquivo CSS

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LocaisColeta = () => {
  const [postos, setPostos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getPostosDeColeta().then(setPostos).catch(console.error);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const postosFiltrados = postos.filter(
    (posto) =>
      posto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      posto.endereco.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const postosComCoordenadas = postosFiltrados.filter(
    (posto) => posto.latitude !== null && posto.longitude !== null
  );

  return (
    <div className="container">
      <h2>Postos de Coleta em Atibaia</h2>
      
      <input
        type="text"
        placeholder="Digite a palavra-chave aqui..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      {postos.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <>
          {postosFiltrados.length === 0 ? (
            <p>Nenhum posto encontrado.</p>
          ) : (
            <div className="postos-container">
              {postosFiltrados.map((posto) => (
                <div className="posto-card" key={posto.id}>
                  <h3>{posto.nome}</h3>
                  <p><strong>Endereço:</strong> {posto.endereco}</p>
                  <p><strong>Horário de funcionamento:</strong> {posto.horario_funcionamento}</p>
                  <p><strong>Feedback:</strong> {posto.feedback}</p>
                </div>
              ))}
            </div>
          )}
          <div className="map-container">
            <MapContainer
              center={[-23.117, -46.556]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {postosComCoordenadas.map((posto) => (
                <Marker
                  key={posto.id}
                  position={[posto.latitude, posto.longitude]}
                >
                  <Popup>
                    <strong>{posto.nome}</strong>
                    <br />
                    {posto.endereco}
                    <br />
                    {posto.horario_funcionamento}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default LocaisColeta;
