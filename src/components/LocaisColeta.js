import React, { useEffect, useState } from "react";
import { getPostosDeColeta } from "../api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LocaisColeta = () => {
  const [postos, setPostos] = useState([]);

  useEffect(() => {
    getPostosDeColeta().then(setPostos).catch(console.error);
  }, []);

  const postosComCoordenadas = postos.filter(
    (posto) => posto.latitude !== null && posto.longitude !== null
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Postos de Coleta</h2>

      {postos.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <>
          <ul>
            {postos.map((posto) => (
              <li key={posto.id}>
                <strong>{posto.nome}</strong><br />
                {posto.endereco}<br />
                {posto.horario_funcionamento}
              </li>
            ))}
          </ul>

          <h3 style={{ marginTop: "2rem" }}>Visualize no mapa</h3>
          <div style={{ height: "60vh", marginTop: "1rem" }}>
            <MapContainer center={[-23.117, -46.556]} zoom={13} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {postosComCoordenadas.map((posto) => (
                <Marker key={posto.id} position={[posto.latitude, posto.longitude]}>
                  <Popup>
                    <strong>{posto.nome}</strong><br />
                    {posto.endereco}<br />
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


