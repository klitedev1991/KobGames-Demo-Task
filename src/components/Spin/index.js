import React from 'react';
import { Spinner } from 'react-bootstrap';

import './style.css';

const Spin = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-item">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      <h6>Loading...</h6>
    </div>
  );
};

export default Spin;
