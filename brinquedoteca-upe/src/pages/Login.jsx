import React, { useState } from 'react';
import './Login.css';
import brinquedotecaLogo from '../assets/Brinquedoteca.png';
import upeLogo from '../assets/Logoupe.png';
import { request } from '../services/api';
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';

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
    <div className="t1-login-container">
      <div className='t1-logo-header'>
        <img src={brinquedotecaLogo} alt="Brinquedoteca" className='t1-login-header'/>
      </div>
      <div className="t1-login-form">
        <div className='t1-title'>
          <h2>Login</h2>
          <img src={upeLogo} alt="UPE" className="t1-upe-logo" />
        </div>
        {error && <p className="t1-error-text">{error}</p>}
        <div className='t1-input-container'>
          <p className='t1-login-title'>E-mail:</p>
          <TextInput
            type="email"
            placeholder="Digite seu e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className='t1-login-title'>Senha:</p>
          <TextInput
            type="password"
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='t1-center'>
          <div className="t1-signup-container-horizontal">
            <p className="t1-signup-text">
              Não possui conta? 
              <Link to="/register">Cadastre-se</Link>
            </p>
            <Link to="/homeResponsable">
              <button className="t1-login-button" onClick={handleLogin}>Entrar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
