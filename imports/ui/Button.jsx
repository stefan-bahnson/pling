import React from 'react';

const Button = ({ label = 'PRESS', handleClick }) => (
  <button className="button-container" onClick={() => handleClick(true)}>
    {label}
  </button>
);

export default Button;
