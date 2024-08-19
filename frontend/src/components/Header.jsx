import React from 'react';
import '../css/header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <img src="./abstract_logo.png" alt="Logo" className="header-logo" /> 
          <span className="company-name">Abstract | Help Center</span>
        </div>
        <div className="header-right">
          <button className="submit-button">Submit a Request</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
