import React, { useState } from "react";
import axios from "axios";
import "./FormularioPosto.css"; // <- importa o CSS aqui

const FormularioPosto = () => {
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    horario_funcionamento: "",
    feedback: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://reciclatech-atibaia-backend.onrender.com/api/postos/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMensagem("✅ Posto de coleta adicionado com sucesso!");
      setFormData({
        nome: "",
        endereco: "",
        horario_funcionamento: "",
        feedback: "",
      });
    } catch (error) {
      if (error.response) {
        console.error("Erro de resposta:", error.response.data);
        setMensagem("❌ Erro: " + JSON.stringify(error.response.data));
      } else {
        console.error("Erro inesperado:", error);
        setMensagem("❌ Erro inesperado. Verifique o console.");
      }
    }
  };

  return (
    <div className="formulario-container">
      <h2>Adicionar Posto de Coleta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={formData.endereco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="horario_funcionamento"
          placeholder="Horário de funcionamento"
          value={formData.horario_funcionamento}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Feedback (opcional)"
          value={formData.feedback}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default FormularioPosto;
