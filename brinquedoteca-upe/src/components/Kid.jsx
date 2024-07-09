import React from 'react';
import './Kid.css'; // Import your CSS for styling
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Kid = () => {
    const handleClickR = () => {
        window.location.href = '/schedulingkid';
    };
    const handleClickL = () => {
        window.location.href = '/editKidprofile';
    };
  return (
    <div className="t1-1-1-child-schedule">
        <p className='t1-1-1-p'>Nome da criença</p>
        <div className='t3-1-1-buttons-box'>
            <button className="t1-1-1-button-r" onClick={handleClickR}>Agendar</button>
            <button className="t1-1-1-button-l" onClick={handleClickL}><FaUser/></button>
        </div>
      
    </div>
  );
};

export default Kid;
