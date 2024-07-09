import React from 'react';
import './YourAppointments.css';
import Appointments from './Appointments';

const YourAppointments = () => {
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

export default YourAppointments;
