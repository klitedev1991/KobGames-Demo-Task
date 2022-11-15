import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import './style.css';

const DropDown = (props) => {
  const { data, getItem } = props;

  const [selectedItem, setSelectedItem] = useState(0);
  const [title, setTitle] = useState(data[0]);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setTitle(data[item]);
    getItem(item);
  };

  return (
    <div className="dropdown-comp">
      <DropdownButton
        title={title}
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        {data &&
          data.map((value, index) => (
            <Dropdown.Item
              key={index}
              eventKey={index}
              className={
                selectedItem === index
                  ? 'dropdown-item dropdown-item-active'
                  : 'dropdown-item'
              }
            >
              {value}
            </Dropdown.Item>
          ))}
      </DropdownButton>
    </div>
  );
};

export default DropDown;
