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
    <div className="t2-signup-container">
      <div className="t2-signup-header">
        <img src={brinquedotecaLogo} alt="Brinquedoteca" className="t2-logo-register" />
      </div>
      <div className="t2-signup-form">
        <div className='t2-title-register'>
          <h2>Cadastro</h2>
          <img src={upeLogo} alt="UPE" className="t2-upe-logo" />
        </div>
        {error && <p className="t2-error-text">{error}</p>}
        <div className='t2-register-input-container'>
          <p className='t2-register-title'>Nome Completo:</p>
          <TextInput
            type="text"
            placeholder="Digite seu nome completo..."
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
          />
          <p className='t2-register-title'>CEP:</p>
          <TextInput
            type="text"
            placeholder="Digite seu CEP..."
            name="cep"
            value={formData.cep}
            onChange={handleChange}
          />
          <p className='t2-register-title'>Rua:</p>
          <TextInput
            type="text"
            placeholder="Digite sua rua..."
            name="rua"
            value={formData.rua}
            onChange={handleChange}
          />
          <div className='t2-div-bairro'>
            <div className='t2-div-numero'>
              <p className='t2-register-title'>Número:</p>
              <TextInput
                type="text"
                placeholder="Nº"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
              />
            </div>
            <div className='t2-nome-bairro'>
              <p className='t2-register-title'>Bairro:</p>
              <TextInput
                type="text"
                placeholder="Digite seu bairro..."
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
              />
            </div>
          </div>
          <p className='t2-register-title'>E-mail:</p>
          <TextInput
            type="email"
            placeholder="Digite seu e-mail..."
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className='t2-register-title'>Telefone Para Contato:</p>
          <TextInput
            type="text"
            placeholder="Digite seu telefone..."
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="t2-text-input"
          />
          <p className='t2-register-title'>CPF:</p>
          <TextInput
            type="text"
            placeholder="Digite seu CPF..."
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
          <p className='t2-register-title'>Senha:</p>
          <TextInput
            type="password"
            placeholder="Digite sua senha..."
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <p className='t2-register-title'>Confirmar Senha:</p>
          <TextInput
            type="password"
            placeholder="Confirme sua senha..."
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
          />
        </div>
        <div className='t2-center'>
          <div className='t2-signup-container-horizontal'>
            <p className="t2-signup-text">
              Voltar para o login? <a href="/">Voltar</a>
            </p>
            <Link to="/">
              <button className="t2-signup-button" onClick={handleSignup}>Cadastrar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
