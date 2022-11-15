import React, { Children } from 'react';

import './style.css';

const Group = (props) => {
  const { children } = props;
  return (
    <div className="group-container group-container-root">
      <div>{children}</div>
    </div>
  );
};

export default Group;
