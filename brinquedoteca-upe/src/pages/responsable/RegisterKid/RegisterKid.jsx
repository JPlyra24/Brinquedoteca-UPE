import React, { useState } from "react";
import "./RegisterKid.css";
import { Input, Button, DatePicker, message } from "antd";
import { addChild } from "../../../services/kid-registration";
import TopBar from "../../../components/TopBar/TopBar";
import { useNavigate } from "react-router-dom";
const RegisterKid = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: {
      cep: "",
      street: "",
      district: "",
      city: "",
      state: "",
      number: "",
      supplement: "",
    },
    observations: "",
    description: "",
    birthday: null,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "cep" ||
      name === "street" ||
      name === "district" ||
      name === "city" ||
      name === "state" ||
      name === "number" ||
      name === "supplement"
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

  const handleBirthdayChange = (date, dateString) => {
    setFormData({
      ...formData,
      birthday: date, // Store the date object in formData
    });
  };

  const handleRegisterChild = async () => {
    try {
      const response = await addChild({
        cpf: formData.cpf,
        name: formData.name,
        lastName: formData.lastName,
        address: {
          cep: formData.address.cep,
          street: formData.address.street,
          district: formData.address.district,
          city: formData.address.city,
          state: formData.address.state,
          number: formData.address.number,
          supplement: formData.address.supplement,
        },
        observations: formData.observations,
        description: formData.description,
        birthday: formData.birthday.toISOString(),
      });

      if (response.status === 200) {
        message.success("Criança cadastrada com sucesso");
        navigate("/homeResponsable");
      } else {
        message.error("Erro no cadastro de criança");
      }
    } catch (error) {
      message.error("Erro no cadastro de criança");
    }
  };

  return (
    <div className="t4-container">
      <TopBar />
      <div className="t4-title-box">
        <h2 className="t4-title">Cadastrar criança</h2>
      </div>
      <div>
        <div className="t4-form-group">
          <p className="t4-label">Nome completo:</p>
          <Input
            type="text"
            placeholder="Digite o nome completo..."
            name="name"
            className="t1-login-input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Sobrenome:</p>
          <Input
            type="text"
            placeholder="Digite o sobrenome..."
            name="lastName"
            className="t1-login-input"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">CEP:</p>
          <Input
            type="text"
            placeholder="Digite o CEP..."
            name="cep"
            className="t1-login-input"
            value={formData.address.cep}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Rua:</p>
          <Input
            type="text"
            placeholder="Digite a rua..."
            className="t1-login-input"
            name="street"
            value={formData.address.street}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Número:</p>
          <Input
            type="text"
            className="t1-login-input"
            placeholder="Digite o número..."
            name="number"
            value={formData.address.number}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Bairro:</p>
          <Input
            type="text"
            className="t1-login-input"
            placeholder="Digite o bairro..."
            name="district"
            value={formData.address.district}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Cidade:</p>
          <Input
            type="text"
            placeholder="Digite a cidade..."
            name="city"
            className="t1-login-input"
            value={formData.address.city}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Estado:</p>
          <Input
            type="text"
            placeholder="Digite o estado..."
            className="t1-login-input"
            name="state"
            value={formData.address.state}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Complemento:</p>
          <Input
            type="text"
            placeholder="Digite o complemento..."
            className="t1-login-input"
            name="supplement"
            value={formData.address.supplement}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Data de nascimento:</p>
          <DatePicker
            placeholder="Selecione a data"
            className="t1-login-input"
            onChange={handleBirthdayChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Observações:</p>
          <Input.TextArea
            placeholder="Alergias, medos, etc..."
            name="observations"
            className="t1-login-input"
            value={formData.observations}
            onChange={handleChange}
          />
        </div>
        <div className="t4-form-group">
          <p className="t4-label">Descrição:</p>
          <Input.TextArea
            placeholder="Descrição..."
            className="t1-login-input"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="t4-buttons-box">
          <p>
            <a href="/homeResponsable" className="t4-a">
              Voltar para Home?
            </a>
          </p>
          <Button
            type="primary"
            className="t4-button"
            onClick={handleRegisterChild}
          >
            Cadastrar
          </Button>
        </div>
        {error && <p className="t4-error-text">{error}</p>}
      </div>
    </div>
  );
};

export default RegisterKid;
