import React from 'react';
import './KidProfile.css'
import TopBar from '../../../components/TopBar';
import TextInput from '../../../components/TextInput';
import { useNavigate } from 'react-router-dom';

const KidProfile = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/homemonitor');
  };
  return (
    <div className='t9-container'>
      <TopBar/>
      <div className='t9-content'>
        <div className='t9-info'>
          <div className='t9-title-box'>
            <h2 className='t9-title'>Perfil da criança</h2>
          </div>
          <div className="t9-info-group">
            <p className='t9-p'>Nome completo:</p>
            <TextInput
              type="text"
              placeholder="Digite o nome completo..." 
            />
          </div>
          <div className="t9-info-group">
            <p className='t9-p'>Data de Nascimento:</p>
            <TextInput
              type="text"
              placeholder="DD/MM/AAAA"
            />
          </div>
          <div className="t9-info-group">
            <p className='t9-p'>Observações:</p>
            <TextInput
              type="text"
              placeholder="Alergias, medos, etc..."
            />
          </div>
          <div className="t9-info-group">
            <p className='t9-p'>Descrição:</p>
            <TextInput
              type="text"
              placeholder="----"
            />
          </div>
        </div>

        <div className='t9-info-resp'>

          <div className='t9-title-box'>
            <h2 className='t9-title'>Responsável</h2>
          </div>

          <div className="t9-info-group">
            <p className='t9-p'>Nome Completo:</p>
            <TextInput
              type="text"
              placeholder="Fulano da Silva"
            />
          </div>
          <div className="t9-info-group">
            <p className='t9-p'>CEP:</p>
            <TextInput
              type="text"
              placeholder="XXXXX-XXX"
            />
          </div>
          <div className="t9-info-group">
            <p className='t9-p'>Rua:</p>
            <TextInput
              type="text"
              placeholder="Rua dos Tal"
            />
          </div>
          <div className='t9-flex-info'>
            <div className="t9-info-group">
              <p className='t9-p'>Número:</p>
              <TextInput
                type="text"
                placeholder="13"
              />
            </div>
            <div className="t9-info-group">
              <p className='t9-p'>Bairro:</p>
              <TextInput
                type=""
                placeholder="Nome do Bairro"
              />
            </div>
          </div>
          <div className="t9-info-group">
            <p className='t9-p'>E-mail:</p>
            <TextInput
              type="email"
              placeholder="seuemail@email.com"
            />
          </div>
          <div className="t9-info-group">
            <p className='t9-p'>Telefone para contato:</p>
            <TextInput
              type="text"
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>
          <div className="t9-info-group">
            <p className='t9-p'>CPF:</p>
            <TextInput
              type="text"
              placeholder="XXX.XXX.XXX-XX"
            />
          </div>
        </div>
      </div>
      <div className='t9-button-box'>
        <button className='t9-button' onClick={handleVoltar}>Voltar</button>
      </div>
        
    </div>
  );
};

export default KidProfile;