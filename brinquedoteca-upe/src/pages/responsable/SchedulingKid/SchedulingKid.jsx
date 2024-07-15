import React, { useState } from 'react';
import { DatePicker, TimePicker } from 'antd';
import TopBar from '../../../components/TopBar/TopBar';
import './SchedulingKid.css';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { message } from 'antd';

const { RangePicker } = TimePicker;

const SchedulingKid = () => {
  const [date, setDate] = useState(null);
  const [timeRange, setTimeRange] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getToken = () => {
    return Cookies.get("token");
  }

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (time) => {
    setTimeRange(time);
  };

  const formatISODateTime = (isoDate, isoTime) => {
    if (!isoDate || !isoTime) return null;

    const date = new Date(isoDate);
    const time = new Date(isoTime);

    const formattedDateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());

    return formattedDateTime.toISOString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || timeRange.length !== 2) {
      console.error('Invalid time range or date is missing');
      return;
    }

    const [startTime, endTime] = timeRange;

    if (!startTime || !endTime) {
      console.error('Invalid time range');
      return;
    }

    const formattedHorarioInicio = formatISODateTime(date, startTime);
    const formattedHorarioFinal = formatISODateTime(date, endTime);

    if (!formattedHorarioInicio || !formattedHorarioFinal) {
      console.error('Error formatting date and time');
      return;
    }

    const payload = {
      arrival: formattedHorarioInicio,
      retrival: formattedHorarioFinal,
      childId: id // Replace with actual child ID from your state or props
    };

    try {
      console.log(payload);
      const response = await fetch(`http://localhost:8080/api/v1/appointment/agendar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful submission
      message.success('Agendamento feito com sucesso');
      navigate("/homeResponsable");
      
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      message.error('Não foi possível agendar esse horário');
    }
  };

  return (
    <div className='t5-container'>
      <TopBar />
      <div className='t5-title-box'>
        <h2 className='t5-title'>Agendamento</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="t5-form-group">
          <p className='t5-label'>Data:</p>
          <DatePicker
            placeholder="Selecione a data"
            value={date}
            onChange={handleDateChange}
            format="DD/MM/YYYY"
          />
        </div>
        <div className="t5-form-group">
          <p className='t5-label'>Horário de Início e Fim:</p>
          <RangePicker
            placeholder={['Horário de Início', 'Horário Final']}
            format="HH:mm"
            value={timeRange}
            onChange={handleTimeChange}
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
  