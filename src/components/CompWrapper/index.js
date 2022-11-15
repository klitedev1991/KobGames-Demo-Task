import React from 'react';

import './style.css';

const CompWrapper = (props) => {
  const { children } = props;

  return <div className="compwrapper">{children}</div>;
};

export default CompWrapper;
