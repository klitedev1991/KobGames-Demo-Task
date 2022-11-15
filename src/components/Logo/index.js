import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <div className="logo-shadow"></div>
        <div className="logo-content">
          <p>LOOTIES</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
