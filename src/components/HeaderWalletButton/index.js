import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import Modal from '../Modal';

import './style.css';

const HeaderWalletButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const title = (
    <div className="header-wallet-button">
      <div>
        <img src={props.btnDataOfCard.image} className="header-wallet-img" />
      </div>
      <div className="header-wallet-button-content">7ZK2..YTAM</div>
    </div>
  );
  const handleSelect = (item) => {
    if (item == 1) setIsModalOpen(true);
    if (item == 2) props.setDisconnect();
  };

  return (
    <div>
      <DropdownButton
        title={title}
        id="header-dropdown-wallet"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey={0}>Copy address</Dropdown.Item>
        <Dropdown.Item eventKey={1}>Change wallet</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Disconnect</Dropdown.Item>
      </DropdownButton>
      <Modal
        isShowModal={isModalOpen}
        handleCloseModal={handleCloseModal}
        {...props}
      />
    </div>
  );
};

export default HeaderWalletButton;
