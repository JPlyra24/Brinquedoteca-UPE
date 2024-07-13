import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditKidProfile.css'; 
import TopBar from '../../../components/TopBar/TopBar';
import TextInput from '../../../components/TextInput';
import { FaPen } from 'react-icons/fa';

const EditKidProfile = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    observacoes: '',
    descricao: ''
  });

  useEffect(() => {
    axios.get('/api/v1/child')
      .then(response => {
        const { nomeCompleto, dataNascimento, observacoes, descricao } = response.data;
        setFormData({
          nomeCompleto,
          dataNascimento,
          observacoes,
          descricao
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
    // Aqui você pode adicionar a lógica para salvar os dados, por exemplo, usando uma requisição POST ou PUT
  };

  return (
    <div className='t7-container'>
      <TopBar/>
      <div className='t7-title-box'>
        <h2 className='t7-title'>Perfil da Criança</h2>
        <div className='t7-icon-box'>
          <FaPen className='t7-icon'/>
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
          />
        </div>
        <div className='t7-buttons-box'>
          <p>
            <a href="/homeResponsable" className='t7-a'>Voltar para Home?</a>
          </p>
          <button type="submit" className='t7-button'>Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default EditKidProfile;
