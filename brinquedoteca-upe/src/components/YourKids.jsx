import React from 'react';
import './YourKids.css';
import Kid from './Kid';
import { FaPlus } from 'react-icons/fa';

const YourKids = () => {
  return (
    <div className="t3-1-container">
        <div className='t3-1-title-box'>
            <div className="t3-1-title">Sua(s) criança(s):</div>
            <button className="t3-1-add-button"><FaPlus /></button>
        </div>
        <div className='t3-1-kids'>
          <Kid/>
          <Kid/>
          <Kid/>
          <Kid/>
          <Kid/>
          <Kid/>
          <Kid/>
        </div>
    </div>
  );
};

export default YourKids;
