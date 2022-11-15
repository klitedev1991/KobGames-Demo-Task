import React, { useState } from 'react';
import Modal from '../Modal';

import './style.css';

const WalletType = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  // const [isLessMode, setIsLessMode] = useState(false);
  const handleOpenModal = () => {
    if (props.btnDataOfCard)
      if (props.btnDataOfCard.btnText === 'CONNECT') return;
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-wallet"
        onClick={() => handleOpenModal()}
        disabled={props.btnDataOfCard && !props.btnDataOfCard.isEnable}
      >
        {props.btnDataOfCard ? (
          <a href="https://phantom.app" className="btn-connect">
            <div>
              <img
                className="listItem__image"
                src={props.btnDataOfCard.image}
              />
            </div>
            <div>{props.btnDataOfCard.btnText}</div>
          </a>
        ) : (
          'Select Wallet'
        )}
      </button>
      <Modal
        isShowModal={isModalOpen}
        handleCloseModal={handleCloseModal}
        {...props}
      />
    </>
  );
};

export default WalletType;
