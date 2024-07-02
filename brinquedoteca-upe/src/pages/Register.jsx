import React, { useState } from 'react';
import './Register.css';
import TextInput from '../components/TextInput';
import brinquedotecaLogo from '../assets/Brinquedoteca.png';
import upeLogo from '../assets/Logoupe.png';
import { request } from '../services/api';
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";
import { Link } from 'react-router-dom';

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
        <img src={brinquedotecaLogo} alt="Brinquedoteca" className="logo-register" />
      </div>
      <div className="signup-form">
        <div className='title-register'>
          <h2>Cadastro</h2>
          <img src={upeLogo} alt="UPE" className="upe-logo" />
        </div>
        {error && <p className="error-text">{error}</p>}
        <div className='register-input-container'>
          <p className='register-title'>Nome Completo:</p>
          <TextInput
            type="text"
            placeholder="Digite seu nome completo..."
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            className="text-input"
          />
          <p className='register-title'>CEP:</p>
          <TextInput
            type="text"
            placeholder="Digite seu CEP..."
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            className="text-input"
          />
          <p className='register-title'>Rua:</p>
          <TextInput
            type="text"
            placeholder="Digite sua rua..."
            name="rua"
            value={formData.rua}
            onChange={handleChange}
            className="text-input"
          />
          <div className='div-bairro'>
            <div className='div-numero'>
              <p className='register-title'>Número:</p>
              <TextInput
                type="text"
                placeholder="Nº"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                className="text-input"
              />
            </div>
            <div className='nome-bairro'>
              <p className='register-title'>Bairro:</p>
              <TextInput
                type="text"
                placeholder="Digite seu bairro..."
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                className="text-input"
              />
            </div>
          </div>
          <p className='register-title'>E-mail:</p>
          <TextInput
            type="email"
            placeholder="Digite seu e-mail..."
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-input"
          />
          <p className='register-title'>Telefone Para Contato:</p>
          <TextInput
            type="text"
            placeholder="Digite seu telefone..."
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="text-input"
          />
          <p className='register-title'>CPF:</p>
          <TextInput
            type="text"
            placeholder="Digite seu CPF..."
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className="text-input"
          />
          <p className='register-title'>Senha:</p>
          <TextInput
            type="password"
            placeholder="Digite sua senha..."
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className="text-input"
          />
          <p className='register-title'>Confirmar Senha:</p>
          <TextInput
            type="password"
            placeholder="Confirme sua senha..."
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            className="text-input"
          />
        </div>
        <div className='center'>
          <div className='signup-container-horizontal'>
            <p className="signup-text">
              Voltar para o login? <a href="/">Voltar</a>
            </p>
            <Link to="/">
              <button className="signup-button" onClick={handleSignup}>Cadastrar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
