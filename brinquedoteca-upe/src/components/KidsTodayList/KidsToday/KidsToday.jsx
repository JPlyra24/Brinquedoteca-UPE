import React from 'react';
import './KidsToday.css'; // Import your CSS for styling
import { FaUser } from 'react-icons/fa';

const KidsToday = () => {
    const handleClickL = () => {
        window.location.href = '/kidprofile';
    };
  return (
    <div className="t8-1-1-child-schedule">
        <p className='t8-1-1-p'>Nome da criença</p>
        <div className='t8-1-1-buttons-box'>
            <button className="t8-1-1-button-l" onClick={handleClickL}><FaUser/></button>
        </div>
      
    </div>
  );
};

export default KidsToday;
