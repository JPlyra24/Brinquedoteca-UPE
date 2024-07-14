import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input, message } from "antd";
import "./Login.css";
import brinquedotecaLogo from "../assets/Brinquedoteca.png";
import upeLogo from "../assets/Logoupe.png";
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";
import { LoginUser } from "../services/login-service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginButton = async () => {
    const data = {
      email: email,
      password: password,
    };

    const status = await LoginUser(data);
    if (status.status === 200) {
      navigate("/homeResponsable");
      message.open({
        type: "success",
        content: "Login realizado com sucesso",
        time: 2,
      });
    } else {
      message.open({
        type: "error",
        content: "Não foi possível realizar o login",
        time: 2,
      });
    }
  };

  const handlePasswordChange = (passwordString) => {
    setPassword(passwordString);
    console.log(password);
  };

  const handleEmailChange = (emailString) => {
    setEmail(emailString);
    console.log(email);
  };

  return (
    <div className="t1-login-container">
      <div className="t1-logo-header">
        <img
          src={brinquedotecaLogo}
          alt="Brinquedoteca"
          className="t1-login-header"
        />
      </div>
      <div className="t1-login-form">
        <div className="t1-title">
          <h2>Login</h2>
          <img src={upeLogo} alt="UPE" className="t1-upe-logo" />
        </div>
        {error && <p className="t1-error-text">{error}</p>}
        <div className="t1-input-container">
          <p className="t1-login-title">E-mail:</p>
          <Input
            type="email"
            placeholder="Digite seu e-mail..."
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          <p className="t1-login-title">Senha:</p>
          <Input
            type="password"
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
        </div>
        <div className="t1-center">
          <div className="t1-signup-container-horizontal">
            <p className="t1-signup-text">
              Não possui conta?
              <Link to="/register">Cadastre-se</Link>
            </p>
            <button className="t1-login-button" onClick={handleLoginButton}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
