import React, { useState } from 'react';
import TopBar from '../../../components/TopBar';
import { FaPen } from 'react-icons/fa';
import './EditMonitorProfile.css'; 
import TextInput from '../../../components/TextInput';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Dados salvos', formData);
  };

  return (
    <div className='t10-container'>
      <TopBar/>
      <div className='t10-title-box'>
        <h2 className='t10-title'>Perfil do brinquedista</h2>
        <div className='t10-icon-box'>
          <FaPen className='t10-icon'/>
        </div>
      </div>
      <form>
        <div className="t10-form-group">
          <p className='t10-label'>Nome completo:</p>
          <TextInput
            type="text"
            name="name"
            placeholder="Nome completo"
            value={formData.cep}
            onChange={handleChange}
          />
        </div>
        <div className="t10-form-group">
          <p className='t10-label'>CEP:</p>
          <TextInput
            type="text" 
            name="CEP"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
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
            />
          </div>
          
      </form>
      <div className='t10-end-resp-prof'>
        <div className="t10-back-link">
          <a href="/homeResponsable" className='t10-a'>Voltar para Home?</a>
        </div>
        <button type="submit" className='t10-button'>Salvar</button>
      </div>
    </div>
  );
};

export default EditMonitorProfile;