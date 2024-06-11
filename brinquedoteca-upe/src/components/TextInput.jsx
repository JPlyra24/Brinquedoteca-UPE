import React from 'react';
import './TextInput.css';

const TextInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      className="text-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default TextInput;
