import React, { useState } from "react";
import "./Register.css";
import { Input, DatePicker } from "antd";
import brinquedotecaLogo from "../assets/Brinquedoteca.png";
import upeLogo from "../assets/Logoupe.png";
import { Link } from "react-router-dom";
import { CreateUserParent } from "../services/login-service";
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: {
      cep: "",
      street: "",
      district: "",
      number: "",
    },
    email: "",
    phone: "",
    cpf: "",
    password: "",
    confirmarSenha: "",
    birthday: null,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "cep" ||
      name === "street" ||
      name === "district" ||
      name === "number"
    ) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSignup = async () => {
    if (formData.password !== formData.confirmarSenha) {
      message.open({
        type: "error",
        content: "As senhas não coincidem",
        time: 2,
      });
    } else {
      const userData = await CreateUserParent({
        cpf: formData.cpf,
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        address: {
          cep: formData.address.cep,
          street: formData.address.street,
          district: formData.address.district,
          number: formData.address.number,
        },
        birthday: formData.birthday ? formData.birthday.toISOString() : null,
        role: "RESPONSAVEL",
      });

      if (userData.status !== 200) {
        message.open({
          type: "error",
          content: "Não foi possível realizar o login",
          time: 2,
        });
      } else {
        navigate("/homeResponsable");
        message.open({
          type: "success",
          content: "Login Realizado com sucesso",
          time: 2,
        });
      }
    }
  };

  const handleDateChange = (date, dateString) => {
    setFormData({
      ...formData,
      birthday: date,
    });
  };

  return (
    <div className="t2-signup-container">
      <div className="t2-signup-header">
        <img
          src={brinquedotecaLogo}
          alt="Brinquedoteca"
          className="t2-logo-register"
        />
      </div>
      <div className="t2-signup-form">
        <div className="t2-title-register">
          <h2>Cadastro</h2>
          <img src={upeLogo} alt="UPE" className="t2-upe-logo" />
        </div>
        {error && <p className="t2-error-text">{error}</p>}
        <div className="t2-register-input-container">
          <p className="t2-register-title">Nome:</p>
          <Input
            type="text"
            placeholder="Digite seu nome..."
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="t2-register-title">Sobrenome:</p>
          <Input
            type="text"
            placeholder="Digite seu sobrenome..."
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <p className="t2-register-title">CEP:</p>
          <Input
            type="text"
            placeholder="Digite seu CEP..."
            name="cep"
            value={formData.address.cep}
            onChange={handleChange}
          />
          <p className="t2-register-title">Rua:</p>
          <Input
            type="text"
            placeholder="Digite sua rua..."
            name="street"
            value={formData.address.street}
            onChange={handleChange}
          />
          <div className="t2-div-bairro">
            <div className="t2-div-numero">
              <p className="t2-register-title">Número:</p>
              <Input
                type="text"
                placeholder="Nº"
                name="number"
                value={formData.address.number}
                onChange={handleChange}
              />
            </div>
            <div className="t2-nome-bairro">
              <p className="t2-register-title">Bairro:</p>
              <Input
                type="text"
                placeholder="Digite seu bairro..."
                name="district"
                value={formData.address.district}
                onChange={handleChange}
              />
            </div>
          </div>
          <p className="t2-register-title">E-mail:</p>
          <Input
            type="email"
            placeholder="Digite seu e-mail..."
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="t2-register-title">Telefone Para Contato:</p>
          <Input
            type="text"
            placeholder="Digite seu telefone..."
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="t2-text-input"
          />
          <p className="t2-register-title">CPF:</p>
          <Input
            type="text"
            placeholder="Digite seu CPF..."
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
          <p className="t2-register-title">Data de Nascimento:</p>
          <DatePicker
            placeholder="Selecione a data"
            format="DD/MM/YYYY"
            onChange={handleDateChange}
            className="t2-date-picker"
          />
          <p className="t2-register-title">Senha:</p>
          <Input
            type="password"
            placeholder="Digite sua senha..."
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="t2-register-title">Confirmar Senha:</p>
          <Input
            type="password"
            placeholder="Confirme sua senha..."
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
          />
        </div>
        <div className="t2-center">
          <div className="t2-signup-container-horizontal">
            <p className="t2-signup-text">
              Voltar para o login? <Link to="/">Voltar</Link>
            </p>
            <button className="t2-signup-button" onClick={handleSignup}>
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
