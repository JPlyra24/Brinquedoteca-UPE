import React, { useState, useEffect } from 'react';
import './EditKidProfile.css'; 
import TopBar from '../../../components/TopBar/TopBar';
import TextInput from '../../../components/TextInput';
import { FaPen } from 'react-icons/fa';
import { api } from '../../../services/api';

const EditKidProfile = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    observacoes: '',
    descricao: ''
  });

  useEffect(() => {
    const fetchChildInfo = async () => {
      try {
        const response = await api.get("/child/");
        const {data} = response.data;
        setFormData({
          nomeCompleto: data.name,
          dataNascimento: data.birthday,
          observacoes: data.observations,
          descricao: data.description
        });
      } catch(error) {
        console.error('Erro ao buscar os dados:', error);
      };
  }

  fetchChildInfo();
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
      await api.post('/child', formData);
      console.log('Dados atualizados com sucesso!');
      setIsEditing(false); // Desabilita o modo de edição após salvar
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
    }
  };

  return (
    <div className='t7-container'>
      <TopBar/>
      <div className='t7-title-box'>
        <h2 className='t7-title'>Perfil da Criança</h2>
        <div className='t7-icon-box'>
          <FaPen className='t7-icon' onClick={handleEditClick}/>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="t4-form-group">
          <p className='t4-label'>Nome completo:</p>
          <TextInput
            type="text"
            placeholder="Digite o nome completo..."
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="t4-form-group">
          <p className='t4-label'>Data de nascimento:</p>
          <TextInput
            type="text"
            placeholder="DD/MM/AAAA"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="t4-form-group">
          <p className='t4-label'>Observações:</p>
          <TextInput
            type="text"
            placeholder="Alergias, medos, etc..."
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="t4-form-group">
          <p className='t4-label'>Descrição:</p>
          <TextInput
            type="text"
            placeholder="Descrição..."
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className='t7-buttons-box'>
          <p>
            <a href="/homeResponsable" className='t7-a'>Voltar para Home?</a>
          </p>
          <button type="submit" className='t7-button' disabled={!isEditing}>Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default EditKidProfile;
