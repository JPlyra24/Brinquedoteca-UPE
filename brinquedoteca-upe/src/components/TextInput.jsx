import React from 'react';
import '../pages/Login.css'

const TextInput = ({ type, placeholder }) => {
  return (
    <input className="t1-login-input" type={type} placeholder={placeholder} />
  );
};

export default TextInput;
