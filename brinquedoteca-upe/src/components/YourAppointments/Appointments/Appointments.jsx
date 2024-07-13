import React from 'react';
import './Appointments.css'; // Import your CSS for styling
import { FaRegTrashCan } from "react-icons/fa6";

const Appointments = () => {
  return (
    <div className="t3-2-1-child-schedule">
        
        <div className='t3-1-1-buttons-box'>
            <div className="t3-2-1-button-r">Nome da criança</div>
            <button className="t3-2-1-button-l"><FaRegTrashCan/></button>
        </div>
        <div className='t3-2-1-info'>
            <p className='t3-2-1-p'>DD/MM/AAAA</p>
            <p className='t3-2-1-p'>Das 00:00 às 00:00</p>
        </div>
    </div>
  );
};

export default Appointments;
