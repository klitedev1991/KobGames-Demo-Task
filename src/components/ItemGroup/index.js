import React from 'react';

import './style.css';

const ItemGroup = (props) => {
  const { children } = props;

  return (
    <div className="item-group">
      <div>
        <div className="item-list-header">
          <h2>Recent Opens</h2>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default ItemGroup;
