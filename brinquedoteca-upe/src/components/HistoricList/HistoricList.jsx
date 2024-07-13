import React from 'react';
import '../YourAppointments/YourAppointments.css';
import Appointments from '../YourAppointments/Appointments/Appointments';

const HistoricList = () => {
  return (
    <div className="t3-2-container">
        <div className='t3-2-title-box'>
            <div className="t3-2-title">Seus agendamentos:</div>
        </div>
        <div className='t3-2-kids'>
          <Appointments/>
          <Appointments/>
          <Appointments/>
          <Appointments/>
          <Appointments/>
          <Appointments/>
          <Appointments/>
          <Appointments/>
          <Appointments/>
        </div>
    </div>
  );
};

export default HistoricList;
