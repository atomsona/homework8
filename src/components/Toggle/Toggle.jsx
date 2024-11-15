import React from 'react';
import './Toggle.css';

function Toggle({ onClick, isDarkMode }) {
  return (
    <button onClick={onClick} className="toggle-button">
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default Toggle;
