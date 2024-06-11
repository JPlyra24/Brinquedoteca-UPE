import React, { useState } from 'react';
import './Login.css';
import LoginInput from '../components/LoginInput';
import brinquedotecaLogo from '../assets/Brinquedoteca.png';
import upeLogo from '../assets/Logoupe.png';
import { request } from '../services/api';

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
      <div className="login-header">
        <img src={brinquedotecaLogo} alt="Brinquedoteca" className="logo" />
      </div>
      <div className="login-form">
        <img src={upeLogo} alt="UPE" className="upe-logo" />
        <h2>Login</h2>
        {error && <p className="error-text">{error}</p>}
        <LoginInput
          type="email"
          placeholder="Digite seu e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Digite sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Entrar</button>
        <p className="signup-text">
          Não possui conta? <a href="/signup">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;