import React, { useState } from 'react';
import './Login.css';
import LoginInput from '../components/LoginInput';
import brinquedotecaLogo from '../assets/Brinquedoteca.png';
import upeLogo from '../assets/Logoupe.png';
import { request } from '../services/api';
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const { status, result, errors } = await request(
      'POST',
      '/login',
      { email, password }
    );

    if (status === 200) {
      console.log('Login successful', result);
    } else {
      setError(errors || 'Erro no login');
    }
  };

  return (
    <div className="login-container">
      <div className='logo-header'>
        <img src={brinquedotecaLogo} alt="Brinquedoteca" className='login-header'/>
      </div>
      <div className="login-form">
        <div className='title'>
          <h2>Login</h2>
          <img src={upeLogo} alt="UPE" className="upe-logo" />
        </div>
        {error && <p className="error-text">{error}</p>}
        <div className='input-container'>
          <p className='login-title'>E-mail:</p>
          <LoginInput
            type="email"
            placeholder="Digite seu e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className='login-title'>Senha:</p>
          <LoginInput
            type="password"
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='center'>
          <div className="signup-container-horizontal">
            <p className="signup-text">
              Não possui conta? 
              <Link to="/register">Cadastre-se</Link>
            </p>
            <Link to="/homeResponsable">
              <button className="login-button" onClick={handleLogin}>Entrar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
