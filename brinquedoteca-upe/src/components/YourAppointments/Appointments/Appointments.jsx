import React from 'react';
import './Appointments.css';
import { FaRegTrashAlt } from 'react-icons/fa';

const Appointments = ({ appointment }) => {
  // Parse the arrival and retrival times
  const arrivalTime = new Date(appointment.arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const retrivalTime = new Date(appointment.retrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Format the date
  const formattedDate = new Date(appointment.arrival).toLocaleDateString();

  // Calculate the time difference between arrival and retrival
  const arrivalDateTime = new Date(appointment.arrival);
  const retrivalDateTime = new Date(appointment.retrival);
  const timeDifference = retrivalDateTime.getTime() - arrivalDateTime.getTime();
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="t3-2-1-child-schedule">
      <div className='t3-1-1-buttons-box'>
        <div className="t3-2-1-button-r">{appointment.childName}</div>
        <button className="t3-2-1-button-l"><FaRegTrashAlt /></button>
      </div>
      <div className='t3-2-1-info'>
        <p className='t3-2-1-p'>{formattedDate}</p>
        <p className='t3-2-1-p'>Das {arrivalTime} às {retrivalTime} ({hours}h {minutes}min)</p>
      </div>
    </div>
  );
};

export default Appointments;
