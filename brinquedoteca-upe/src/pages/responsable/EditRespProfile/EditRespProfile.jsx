import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditRespProfile.css'
import TextInput from '../../../components/TextInput';
import TopBar from '../../../components/TopBar';
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";
import { FaPen } from "react-icons/fa";

const EditRespProfile = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    email: '',
    telefone: '',
    cpf: '',
    senha: '',
  });

  useEffect(() => {
    axios.get('/api/v1/parent')
      .then(response => {
        const { nome, cep, rua, numero, bairro, email, telefone, cpf, senha } = response.data;
        setFormData({
          nome,
          cep,
          rua,
          numero,
          bairro,
          email,
          telefone,
          cpf,
          senha
        });
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="t6-profile-form-container">
      <TopBar/>
      <div className='t6-resp-prof'>
        <h2 className='t6-title-resp-prof'>Perfil do Responsável</h2>
        <div className='t6-icon-box'>
          <FaPen className='t6-icon-resp-prof'/>
        </div>

      </div>
      <form onSubmit={handleSubmit}>
        <div className='t6-form-resp-prof'>
          <div>
            <div className="t6-form-group">
              <p className='t6-label-resp-prof'>Nome completo:</p>
              <TextInput
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Fulano da Silva"
              />
            </div>
            <div className="t6-form-group">
              <p className='t6-label-resp-prof'>CEP:</p>
              <TextInput
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                placeholder="XXXXX-XXX"
                
              />
            </div>
            <div className="t6-form-group">
              <p className='t6-label-resp-prof'>Rua:</p>
              <TextInput
                type="text"
                name="rua"
                value={formData.rua}
                onChange={handleChange}
                placeholder="Rua dos Tal"
              />
            </div>
            <div className='t6-div-bairro-resp'>
              <div className="t6-form-group">
                <p className='t6-label-resp-prof'>Número:</p>
                <TextInput
                  type="text"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  placeholder="13"
                />
              </div>
              <div className="t6-form-group">
                <p className='t6-label-resp-prof'>Bairro:</p>
                <TextInput
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                  placeholder="Santos"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="t6-form-group">
              <p className='t6-label-resp-prof'>E-mail:</p>
              <TextInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@gmail.com"
              />
            </div>
            <div className="t6-form-group">
              <p className='t6-label-resp-prof'>Telefone para contato:</p>
              <TextInput
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(XX) XXXXX-XXXX"
              />
            </div>
            <div className="t6-form-group">
              <p className='t6-label-resp-prof'>CPF:</p>
              <TextInput
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="XXX.XXX.XXX-XX"
              />
            </div>
            <div className="t6-form-group">
              <p className='t6-label-resp-prof'>Senha:</p>
              <TextInput
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="******"
              />
            </div>
          </div>
        </div>
      </form>
      <div className='t6-end-resp-prof'>
        <div className="t6-back-link">
          <a href="/homeResponsable" className='t6-a'>Voltar para Home?</a>
        </div>
        <button type="submit" className='t6-button'>Salvar</button>
      </div>
    </div>
  );
};

export default EditRespProfile;
