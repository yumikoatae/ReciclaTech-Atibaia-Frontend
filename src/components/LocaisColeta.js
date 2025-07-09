import React, { useEffect, useState } from "react";
import { getPostosDeColeta } from "../api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./LocaisColeta.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LocaisColetaSection = () => {
  const [postos, setPostos] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    getPostosDeColeta().then(setPostos).catch(console.error);
  }, []);

  const handleFiltroChange = (e) => setFiltro(e.target.value);

  const postosFiltrados = postos.filter(
    (posto) =>
      posto.nome.toLowerCase().includes(filtro.toLowerCase()) ||
      posto.endereco.toLowerCase().includes(filtro.toLowerCase())
  );

  const postosComCoordenadas = postosFiltrados.filter(
    (posto) => posto.latitude !== null && posto.longitude !== null
  );

  return (
    <section className="locais-coleta">
      <h2 className="locais-coleta__titulo">Postos de Coleta em Atibaia</h2>

      <input
        type="text"
        placeholder="Digite a palavra-chave aqui..."
        value={filtro}
        onChange={handleFiltroChange}
        className="locais-coleta__input-filtro"
      />

      {postos.length === 0 ? (
        <p className="locais-coleta__status">Carregando...</p>
      ) : (
        <>
          {postosFiltrados.length === 0 ? (
            <p className="locais-coleta__status">Nenhum posto encontrado.</p>
          ) : (
            <div className="locais-coleta__lista">
              {postosFiltrados.map((posto) => (
                <article className="posto-card" key={posto.id}>
                  <h3 className="posto-card__nome">{posto.nome}</h3>
                  <p className="posto-card__endereco">
                    <strong>Endereço:</strong> {posto.endereco}
                  </p>
                  <p className="posto-card__horario">
                    <strong>Horário de funcionamento:</strong>{" "}
                    {posto.horario_funcionamento}
                  </p>
                  <p className="posto-card__feedback">
                    <strong>Feedback:</strong> {posto.feedback || "N/A"}
                  </p>
                </article>
              ))}
            </div>
          )}

          <div className="locais-coleta__mapa">
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
    </section>
  );
};

export default LocaisColetaSection;