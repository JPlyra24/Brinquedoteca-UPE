import React from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import './TopBar.css';
import brinquedotecaLogo from '../../assets/Brinquedoteca.png';
import upeLogo from '../../assets/Logoupe.png';
import { Button, message } from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <img src={brinquedotecaLogo} alt="Brinquedoteca" className="logo" />
        <img src={upeLogo} alt="UPE" className="logo" />
      </div>
      <div className="topbar-right">
        <FaUser className="icon" onClick={() => {navigate('/editRespprofile')}} />
        <FaSignOutAlt className="icon" onClick={() => {Cookies.remove('token', {path: "/"}); navigate("/"); message.open({
          type: "info",
          content: "Logout realizado com sucesso",
          time: 2
        })}}/>
        
      </div>
    </div>
  );
};

export default TopBar;
