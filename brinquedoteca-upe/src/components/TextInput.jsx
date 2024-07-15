import React from 'react';
import '../pages/Login.css'

const TextInput = ({ type, placeholder, disabled }) => {
  return (
    <input className="t1-login-input" type={type} placeholder={placeholder} disabled={disabled}/>
  );
};

export default TextInput;
