import React, { useState, useEffect } from 'react';
import './YourAppointments.css';
import Appointments from './Appointments/Appointments';
import { api } from '../../services/api';
import { Empty } from 'antd';

const YourAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await api.get('/parent/list');
        console.log(response);
        if (response.data && Array.isArray(response.data)) {
          setAppointments(response.data.reverse());
        } else {
          console.error('Estrutura de dados inesperada:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="t3-2-container">
      <div className='t3-2-title-box'>
        <div className="t3-2-title">Seus agendamentos:</div>
      </div>
      <div className='t3-2-kids'>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <Appointments key={appointment.id} appointment={appointment} />
          ))
        ) : (
          <Empty description= "Nenhum agendamento criado"/>
        )}
      </div>
    </div>
  );
};

export default YourAppointments;
