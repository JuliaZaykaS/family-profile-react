import React from 'react';

export const Input = ({ label, name, value, onChangeInput }) => {
  return (
    <label>
      {label}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChangeInput}
      ></input>
    </label>
  );
};
