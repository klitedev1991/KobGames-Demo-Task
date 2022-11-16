import React, { useState } from "react";

import Modal from "../Modal";
import NoteModal from "../NoteModal";
import AnimationModal from "../AnimationModal";

import { delay } from "../../utils/functions";

import "./style.css";

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

const OpenButton = ({
  image,
  itemKey,
  setSelectedBtn,
  setAnimation,
  setStatusToOpen,
}) => {
  const showAnimation = async () => {
    console.log("before");
    await delay(1000);
    setAnimation();
    setStatusToOpen(image);
    console.log("after");
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
  const [isAnimationModalOpen, setIsAnimationModalOpen] = useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [selectedOpenBtn, setSelectedOpenBtn] = useState(-1);

  const handleOpenModal = (isOpen) => {
    setIsModalOpen(isOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenButton = (selected) => {
    setSelectedOpenBtn(selected);
    btnDataOfCard.status = "processing";
  };

  const setInitialStatus = (initial) => {
    setSelectedOpenBtn(initial);
  };

  const handleAnimation = () => {
    setIsAnimationModalOpen(true);
  };

  const setEndEvent = () => {
    setIsAnimationModalOpen(false);
    setIsNoteModalOpen(true);
  };

  const closeNoteModal = () => {
    setIsNoteModalOpen(false);
  };

  return (
    <>
      {btnDataOfCard.status === "select-wallet" && (
        <SelectWalletButton
          itemKey={itemKey}
          handleOpenModal={handleOpenModal}
        />
      )}
      {btnDataOfCard.status === "open" && (
        <OpenButton
          itemKey={itemKey}
          setSelectedBtn={handleOpenButton}
          setAnimation={handleAnimation}
          setStatusToOpen={setStatusToOpen}
          image={btnDataOfCard.image}
        />
      )}
      {btnDataOfCard.status === "processing" && (
        <ProcessingButton setInitialStatus={setInitialStatus} />
      )}
      <Modal
        isShowModal={isModalOpen}
        handleCloseModal={handleCloseModal}
        {...props}
      />
      <AnimationModal
        isShowModal={isAnimationModalOpen}
        setPlayEnded={setEndEvent}
      />
      <NoteModal isShowModal={isNoteModalOpen} closeModal={closeNoteModal} />
    </>
  );
};

export default WalletType;
