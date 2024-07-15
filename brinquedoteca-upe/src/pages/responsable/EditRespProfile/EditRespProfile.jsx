import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditRespProfile.css';
import TextInput from '../../../components/TextInput';
import TopBar from '../../../components/TopBar/TopBar';
import { FaPen } from 'react-icons/fa';
import { api } from '../../../services/api';

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
    // Função para buscar dados do perfil do responsável
    const fetchParentInfo = async () => {
      try {
        const response = await api.get('/parent'); // Rota que busca informações do perfil
        const {data} = response;
        console.log(data)
        setFormData({
          nome: data.name,
          cep: data.address.cep,
          rua: data.address.street,
          numero: data.address.number,
          bairro: data.address.district,
          email: data.lastName,
          telefone: data.address.cep,
          cpf: data.address.cep,
          senha: data.address.cep
        });
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchParentInfo();
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    if (isEditing){
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEditing) {
      return; // Retorna nada se não estiver em modo de edição
    }
    try {
      await api.post('/parent', formData);
      console.log('Dados atualizados com sucesso!');
      setIsEditing(false); // Desabilita o modo de edição após salvar
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
    }
  };

  return (
    <div className="t6-profile-form-container">
      <TopBar />
      <div className="t6-resp-prof">
        <h2 className="t6-title-resp-prof">Perfil do Responsável</h2>
        <div className="t6-icon-box">
          <FaPen className="t6-icon-resp-prof" onClick={handleEditClick}/>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="t6-form-resp-prof">
          <div>
            <div className="t6-form-group">
              <p className="t6-label-resp-prof">Nome completo:</p>
              <TextInput
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder={formData.nome}
                disabled={!isEditing}
              />
            </div>
            <div className="t6-form-group">
              <p className="t6-label-resp-prof">CEP:</p>
              <TextInput
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                placeholder={formData.cep}
                disabled={!isEditing}
              />
            </div>
            <div className="t6-form-group">
              <p className="t6-label-resp-prof">Rua:</p>
              <TextInput
                type="text"
                name="rua"
                value={formData.rua}
                onChange={handleChange}
                placeholder={formData.rua}
                disabled={!isEditing}
              />
            </div>
            <div className="t6-div-bairro-resp">
              <div className="t6-form-group">
                <p className="t6-label-resp-prof">Número:</p>
                <TextInput
                  type="text"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  placeholder={formData.numero}
                  disabled={!isEditing}
                />
              </div>
              <div className="t6-form-group">
                <p className="t6-label-resp-prof">Bairro:</p>
                <TextInput
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                  placeholder={formData.bairro}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="t6-form-group">
              <p className="t6-label-resp-prof">E-mail:</p>
              <TextInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={formData.email}
                disabled={!isEditing}
              />
            </div>
            <div className="t6-form-group">
              <p className="t6-label-resp-prof">Telefone para contato:</p>
              <TextInput
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder={formData.telefone}
                disabled={!isEditing}
              />
            </div>
            <div className="t6-form-group">
              <p className="t6-label-resp-prof">CPF:</p>
              <TextInput
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder={formData.cpf}
                disabled={!isEditing}
              />
            </div>
            <div className="t6-form-group">
              <p className="t6-label-resp-prof">Senha:</p>
              <TextInput
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="******"
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="t6-end-resp-prof">
          <div className="t6-back-link">
            <a href="/homeResponsable" className="t6-a">
              Voltar para Home?
            </a>
          </div>
          <button type="submit" className="t6-button" disabled={!isEditing}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRespProfile;