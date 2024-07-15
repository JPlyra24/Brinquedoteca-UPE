import React, { useState } from "react";
import "./RegisterKid.css";
import { Input, Button, DatePicker, message } from "antd";
import brinquedotecaLogo from "../../../assets/Brinquedoteca.png";
import upeLogo from "../../../assets/Logoupe.png";
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
    <div className="t7-container">
      <TopBar />
      <div className="t7-title-box">
        <h2 className="t7-title">Cadastrar criança</h2>
      </div>
      <div>
        <div className="t7-form-group">
          <p className="t7-label">Nome completo:</p>
          <Input
            type="text"
            placeholder="Digite o nome completo..."
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Sobrenome:</p>
          <Input
            type="text"
            placeholder="Digite o sobrenome..."
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">CEP:</p>
          <Input
            type="text"
            placeholder="Digite o CEP..."
            name="cep"
            value={formData.address.cep}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Rua:</p>
          <Input
            type="text"
            placeholder="Digite a rua..."
            name="street"
            value={formData.address.street}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Número:</p>
          <Input
            type="text"
            placeholder="Digite o número..."
            name="number"
            value={formData.address.number}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Bairro:</p>
          <Input
            type="text"
            placeholder="Digite o bairro..."
            name="district"
            value={formData.address.district}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Cidade:</p>
          <Input
            type="text"
            placeholder="Digite a cidade..."
            name="city"
            value={formData.address.city}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Estado:</p>
          <Input
            type="text"
            placeholder="Digite o estado..."
            name="state"
            value={formData.address.state}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Complemento:</p>
          <Input
            type="text"
            placeholder="Digite o complemento..."
            name="supplement"
            value={formData.address.supplement}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Data de nascimento:</p>
          <DatePicker
            placeholder="Selecione a data"
            onChange={handleBirthdayChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Observações:</p>
          <Input.TextArea
            placeholder="Alergias, medos, etc..."
            name="observations"
            value={formData.observations}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className="t7-label">Descrição:</p>
          <Input.TextArea
            placeholder="Descrição..."
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="t7-buttons-box">
          <p>
            <a href="/homeResponsable" className="t7-a">
              Voltar para Home?
            </a>
          </p>
          <Button
            type="primary"
            className="t7-button"
            onClick={handleRegisterChild}
          >
            Cadastrar
          </Button>
        </div>
        {error && <p className="t7-error-text">{error}</p>}
      </div>
    </div>
  );
};

export default RegisterKid;
