import React, { useState } from 'react';

import Modal from '../Modal';

import { delay } from '../../utils/functions';

import './style.css';

const SelectWalletButton = ({ handleOpenModal }) => {
  const handleClick = () => {
    handleOpenModal(true);
  };

  return (
    <>
      <button className="btn btn-wallet" onClick={() => handleClick()}>
        Select Wallet
      </button>
    </>
  );
};

const OpenButton = ({ image, itemKey, setSelectedBtn, setStatusToOpen }) => {
  const showAnimation = async () => {
    console.log('before');
    await delay(1000);
    setStatusToOpen(image);
    console.log('after');
  };

  const handleClick = () => {
    setSelectedBtn(itemKey);
    showAnimation();
  };

  return (
    <>
      <button className="btn btn-open" onClick={() => handleClick()}>
        Open
      </button>
    </>
  );
};

const ProcessingButton = ({ setInitialStatus }) => {
  setInitialStatus();
  return (
    <>
      <button className="btn btn-processing">Processing...</button>
    </>
  );
};

const WalletType = (props) => {
  const { itemKey, btnDataOfCard, setStatusToOpen } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOpenBtn, setSelectedOpenBtn] = useState(-1);

  const handleOpenModal = (isOpen) => {
    setIsModalOpen(isOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenButton = (selected) => {
    console.log(selected);
    setSelectedOpenBtn(selected);
    btnDataOfCard.status = 'processing';
  };

  const setInitialStatus = (initial) => {
    setSelectedOpenBtn(initial);
  };

  return (
    <>
      {btnDataOfCard.status === 'select-wallet' && (
        <SelectWalletButton
          itemKey={itemKey}
          handleOpenModal={handleOpenModal}
        />
      )}
      {btnDataOfCard.status === 'open' && (
        <OpenButton
          itemKey={itemKey}
          setSelectedBtn={handleOpenButton}
          setStatusToOpen={setStatusToOpen}
          image={btnDataOfCard.image}
        />
      )}
      {btnDataOfCard.status === 'processing' && (
        <ProcessingButton setInitialStatus={setInitialStatus} />
      )}
      <Modal
        isShowModal={isModalOpen}
        handleCloseModal={handleCloseModal}
        {...props}
      />
    </>
  );
};

export default WalletType;
