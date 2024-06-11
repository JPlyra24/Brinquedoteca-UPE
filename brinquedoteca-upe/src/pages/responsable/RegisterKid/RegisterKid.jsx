import React, { useState } from 'react';
import './RegisterKid.css';
import TextInput from '../../../components/TextInput';
import brinquedotecaLogo from '../../../assets/Brinquedoteca.png';
import upeLogo from '../../../assets/Logoupe.png';
import { request } from '../../../services/api';

const RegisterKid = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    observacoes: '',
    descricao: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegisterChild = async () => {
    const { status, result, errors } = await request(
      'POST',
      '/register-child',
      formData
    );

    if (status === 200) {
      console.log('Cadastro de criança bem-sucedido', result);
    } else {
      setError(errors || 'Erro no cadastro de criança');
    }
  };

  return (
    <div className="register-child-container">
      <div className="register-child-header">
        <img src={brinquedotecaLogo} alt="Brinquedoteca" className="logo" />
        <img src={upeLogo} alt="UPE" className="upe-logo" />
      </div>
      <div className="register-child-form">
        <h2>Cadastrar criança</h2>
        {error && <p className="error-text">{error}</p>}
        <TextInput
          type="text"
          placeholder="Digite o nome completo..."
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="DD/MM/AAAA"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Alergias, medos, etc..."
          name="observacoes"
          value={formData.observacoes}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Descrição..."
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
        />
        <button className="register-child-button" onClick={handleRegisterChild}>Cadastrar</button>
        <p className="home-text">
          Voltar para Home? <a href="/home">Voltar</a>
        </p>
      </div>
    </div>
  );
};


export default RegisterKid;
