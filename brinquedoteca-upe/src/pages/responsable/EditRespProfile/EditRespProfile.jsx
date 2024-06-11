import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditRespProfile.css'

const EditRespProfile = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    email: '',
    telefone: '',
    cpf: '',
    senha: '',
  });

  useEffect(() => {
    axios.get('/api/v1/parent')
      .then(response => {
        const { nome, cep, rua, numero, bairro, email, telefone, cpf, senha } = response.data;
        setFormData({
          nome,
          cep,
          rua,
          numero,
          bairro,
          email,
          telefone,
          cpf,
          senha
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
  };

  return (
    <div className="profile-form-container">
      <h2>Perfil do Responsável</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome completo:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Fulano da Silva"
          />
        </div>
        <div className="form-group">
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            placeholder="XXXXX-XXX"
          />
        </div>
        <div className="form-group">
          <label>Rua:</label>
          <input
            type="text"
            name="rua"
            value={formData.rua}
            onChange={handleChange}
            placeholder="Rua dos Tal"
          />
        </div>
        <div className="form-group">
          <label>Número:</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            placeholder="13"
          />
        </div>
        <div className="form-group">
          <label>Bairro:</label>
          <input
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            placeholder="Santos"
          />
        </div>
        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@gmail.com"
          />
        </div>
        <div className="form-group">
          <label>Telefone para contato:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(XX) XXXXX-XXXX"
          />
        </div>
        <div className="form-group">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="XXX.XXX.XXX-XX"
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="******"
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
      <div className="back-link">
        <a href="/">Voltar para Home?</a>
      </div>
    </div>
  );
};

export default EditRespProfile;
