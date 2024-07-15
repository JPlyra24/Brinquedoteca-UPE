import React, { useState, useEffect } from 'react';
import TopBar from '../../../components/TopBar/TopBar';
import { FaPen } from 'react-icons/fa';
import './EditMonitorProfile.css'; 
import TextInput from '../../../components/TextInput';
import { api } from '../../../services/api';

const EditMonitorProfile = () => {
  const [formData, setFormData] = useState({
    nome: 'Beltrano dos Santos',
    cep: 'XXXXX-XXX',
    rua: 'Rua Bonita',
    numero: '100',
    bairro: 'Bairro Legal',
    email: 'beltranasantos@upe.br',
    telefone: '(XX) XXXXX-XXXX',
    cpf: 'XXX.XXX.XXX-XX',
    curso: 'Pedagogia'
  });

  useEffect(() => {
    // Função para buscar dados do perfil do responsável
    const fetchMonitorInfo = async () => {
      try {
        const response = await api.get('/brinquedista/info'); // Rota que busca informações do perfil
        const {data} = response;
        setFormData({
          nome: data.name +" "+ data.lastName,
          cep: data.address.cep,
          rua: data.address.street,
          numero: data.address.number,
          bairro: data.address.district,
          email: data.email,
          telefone: data.phone,
          cpf: data.cpf,
          curso: data.curso
        });
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchMonitorInfo();
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
    <div className='t10-container'>
      <TopBar/>
      <div className='t10-title-box'>
        <h2 className='t10-title'>Perfil do brinquedista</h2>
        <div className='t10-icon-box'>
          <FaPen className='t10-icon' onClick={handleEditClick}/>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="t10-form-group">
          <p className='t10-label'>Nome completo:</p>
          <TextInput
            type="text"
            name="name"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="t10-form-group">
          <p className='t10-label'>CEP:</p>
          <TextInput
            type="text" 
            name="CEP"
            placeholder="Nome completo"
            value={formData.cep}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="t10-form-group">
          <p className='t10-label'>Rua:</p>
          <TextInput
            type="text"
            name="rua"
            placeholder="Rua"
            value={formData.rua}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
          <div className='t6-div-bairro-resp'>
          <div className="t10-form-group">
              <p className='t10-label'>Número:</p>
              <TextInput
                type="text"
                name="numero"
                placeholder="Número"
                value={formData.numero}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="t10-form-group">
              <p className='t10-label'>Bairro:</p>
              <TextInput
                type="text"
                name="bairro"
                placeholder="Bairro"
                value={formData.bairro}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="t10-form-group">
            <p className='t10-label'>E-mail:</p>
            <TextInput
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="t10-form-group">
            <p className='t10-label'>Telefone para contato:</p>
            <TextInput
              type="text"
              name="telefone"
              placeholder="Telefone para contato"
              value={formData.telefone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="t10-form-group">
            <p className='t10-label'>CPF:</p>
            <TextInput
              type="text"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="t10-form-group">
            <p className='t10-label'>Curso:</p>
            <TextInput
              type="text"
              name="curso"
              placeholder="Curso"
              value={formData.curso}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          
      </form>
      <div className='t10-end-resp-prof'>
        <div className="t10-back-link">
          <a href="/homeResponsable" className='t10-a'>Voltar para Home?</a>
        </div>
        <button type="submit" className='t10-button' disabled={!isEditing}>Salvar</button>
      </div>
    </div>
  );
};

export default EditMonitorProfile;