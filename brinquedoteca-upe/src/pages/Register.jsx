import React, { useState } from 'react';
import './Register.css';
import TextInput from '../components/TextInput';
import brinquedotecaLogo from '../assets/Brinquedoteca.png';
import upeLogo from '../assets/Logoupe.png';
import { request } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    email: '',
    telefone: '',
    cpf: '',
    senha: '',
    confirmarSenha: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignup = async () => {
    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }

    const { status, result, errors } = await request(
      'POST',
      '/signup',
      formData
    );

    if (status === 200) {
      console.log('Cadastro bem-sucedido', result);
    } else {
      setError(errors || 'Erro no cadastro');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <img src={brinquedotecaLogo} alt="Brinquedoteca" className="logo" />
        <img src={upeLogo} alt="UPE" className="upe-logo" />
      </div>
      <div className="signup-form">
        <h2>Cadastro</h2>
        {error && <p className="error-text">{error}</p>}
        <TextInput
          type="text"
          placeholder="Digite seu nome completo..."
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Digite seu CEP..."
          name="cep"
          value={formData.cep}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Digite sua rua..."
          name="rua"
          value={formData.rua}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Nº"
          name="numero"
          value={formData.numero}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Digite seu bairro..."
          name="bairro"
          value={formData.bairro}
          onChange={handleChange}
        />
        <TextInput
          type="email"
          placeholder="Digite seu e-mail..."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Digite seu telefone..."
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          placeholder="Digite seu CPF..."
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          placeholder="Digite sua senha..."
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          placeholder="Confirme sua senha..."
          name="confirmarSenha"
          value={formData.confirmarSenha}
          onChange={handleChange}
        />
        <button className="signup-button" onClick={handleSignup}>Cadastrar</button>
        <p className="login-text">
          Voltar para o login? <a href="/login">Voltar</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
