import React from 'react';
import '../pages/Login.css'

const LoginInput = ({ type, placeholder }) => {
  return (
    <input className="login-input" type={type} placeholder={placeholder} />
  );
};

export default LoginInput;
