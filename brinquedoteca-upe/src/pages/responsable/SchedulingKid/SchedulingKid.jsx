import React from 'react';
import TextInput from '../../../components/TextInput';
import TopBar from '../../../components/TopBar/TopBar';
import './SchedulingKid.css';

const SchedulingKid = () => {
  return (
    <div className='t5-container'>
      <TopBar/>
      <div className='t5-title-box'>
        <h2 className='t5-title'>Agendamento</h2>
      </div>
      <form>
        <div className="t5-form-group">
          <p className='t5-label'>Data:</p>
          <TextInput
            type="text"
            placeholder="DD/MM/AAAA"
            name="data"
          />
        </div>
        <div className="t5-form-group">
          <p className='t5-label'>Horário de Início:</p>
          <TextInput
            type="text"
            placeholder="HH:MM"
            name="horarioInicio"
          />
        </div>
        <div className="t5-form-group">
          <p className='t5-label'>Horário Final:</p>
          <TextInput
            type="text"
            placeholder="HH:MM"
            name="horarioFinal"
          />
        </div>
        <div className='t5-buttons-box'>
          <p>
            <a href="/homeResponsable" className='t5-a'>Voltar para Home?</a>
          </p>
          <button type="submit" className='t5-button'>Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default SchedulingKid;
