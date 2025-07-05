import React, { useState } from "react";
import axios from "axios";

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
      await axios.post("https://recicla-tech-atibaia-backend.onrender.com/api/postos/", formData);
      setMensagem("✅ Posto de coleta adicionado com sucesso!");
      setFormData({
        nome: "",
        endereco: "",
        horario_funcionamento: "",
        feedback: "",
      });
    } catch (error) {
      setMensagem("❌ Erro ao adicionar posto. Verifique e tente novamente.");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Adicionar Posto de Coleta</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required /><br />
        <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} required /><br />
        <input type="text" name="horario_funcionamento" placeholder="Horário de funcionamento" value={formData.horario_funcionamento} onChange={handleChange} required /><br />
        <textarea name="feedback" placeholder="Feedback (opcional)" value={formData.feedback} onChange={handleChange} /><br />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default FormularioPosto;

