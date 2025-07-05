import axios from "axios";

const API_BASE = "https://reciclatech-atibaia-backend.onrender.com";

// Buscar todos os postos de coleta
export const getPostosDeColeta = async () => {
  const response = await axios.get(`${API_BASE}/api/postos/`);
  return response.data;
};

