import React from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import './TopBar.css';
import brinquedotecaLogo from '../../assets/Brinquedoteca.png';
import upeLogo from '../../assets/Logoupe.png';
import { Button } from 'antd';
import Cookies from 'js-cookie';
const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <img src={brinquedotecaLogo} alt="Brinquedoteca" className="logo" />
        <img src={upeLogo} alt="UPE" className="logo" />
      </div>
      <div className="topbar-right">
        <FaUser className="icon" />
        <FaSignOutAlt className="icon" onClick={() => {Cookies.remove('token', {path: "/"})}}/>
        
      </div>
    </div>
  );
};

export default TopBar;
