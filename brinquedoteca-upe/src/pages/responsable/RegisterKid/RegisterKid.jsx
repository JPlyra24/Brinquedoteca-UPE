import React, { useState } from 'react';
import './RegisterKid.css';
import TextInput from '../../../components/TextInput';
import brinquedotecaLogo from '../../../assets/Brinquedoteca.png';
import upeLogo from '../../../assets/Logoupe.png';
import { request } from '../../../services/api';
import TopBar from '../../../components/TopBar/TopBar';

const RegisterKid = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    observacoes: '',
    descricao: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegisterChild = async () => {
    const { status, result, errors } = await request(
      'POST',
      '/register-child',
      formData
    );

    if (status === 200) {
      console.log('Cadastro de criança bem-sucedido', result);
    } else {
      setError(errors || 'Erro no cadastro de criança');
    }
  };

  return (
    <div className="t7-container">
      <TopBar/>
      <div className='t7-title-box'>
        <h2 className='t7-title'>Cadastrar criança</h2>
      </div>
      <div>
        <div className="t7-form-group">
          <p className='t7-label'>Nome completo:</p>
          <TextInput
            type="text"
            placeholder="Digite o nome completo..."
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className='t7-label'>Data de nascimento:</p>
          <TextInput
            type="text"
            placeholder="DD/MM/AAAA"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className='t7-label'>Observações:</p>
          <TextInput
            type="text"
            placeholder="Alergias, medos, etc..."
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
          />
        </div>
        <div className="t7-form-group">
          <p className='t7-label'>Descrição:</p>
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
          <button className='t7-button' onClick={handleRegisterChild}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
};


export default RegisterKid;
