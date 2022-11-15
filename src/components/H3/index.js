import React from 'react';

import './style.css';

const H3 = (props) => {
  const { children } = props;

  return (
    <div className="h3-container">
      <h3>{children}</h3>
    </div>
  );
};

export default H3;
