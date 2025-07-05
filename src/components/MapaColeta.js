// src/components/MapaColeta.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getPostosDeColeta } from "../api";
import L from "leaflet";

// Corrige os ícones padrão do Leaflet no React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapaColeta = () => {
  const [postos, setPostos] = useState([]);

  useEffect(() => {
    getPostosDeColeta().then(setPostos).catch(console.error);
  }, []);

  return (
    <div style={{ height: "80vh", margin: "2rem" }}>
      <h2>Mapa de Postos de Coleta</h2>
      <MapContainer
        center={[-23.117, -46.556]} // centro aproximado de Atibaia
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {postos.map((posto) => (
          <Marker
            key={posto.id}
            position={[posto.latitude, posto.longitude]}
          >
            <Popup>
              <strong>{posto.nome}</strong><br />
              {posto.endereco}<br />
              {posto.horario_funcionamento}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapaColeta;

