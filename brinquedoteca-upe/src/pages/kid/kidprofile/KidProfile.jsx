import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './KidProfile.css'; 

const KiddProfile = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    observacoes: '',
    descricao: ''
  });

  useEffect(() => {
    axios.get('/api/v1/child')
      .then(response => {
        const { nomeCompleto, dataNascimento, observacoes, descricao } = response.data;
        setFormData({
          nomeCompleto,
          dataNascimento,
          observacoes,
          descricao
        });
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aqui você pode adicionar a lógica para salvar os dados, por exemplo, usando uma requisição POST ou PUT
  };

  return (
    <div className="profile-form-container">
      <h2>Perfil da Criança</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome completo:</label>
          <input
            type="text"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Data de nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Observações:</label>
          <textarea
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Salvar</button>
          <a href="/home">Voltar para Home?</a>
        </div>
      </form>
    </div>
  );
};

export default KiddProfile;
