import React, { useState } from 'react';
import ReactModal from 'react-modal';

import './style.css';

const Modal = (props) => {
  const ModalHeader = () => {
    return (
      <div className="modal__header">
        <div>Select your wallet</div>
        <div>
          {/* <button onClick={handleCloseModal}>&times;</button> */}
          <button onClick={props.handleCloseModal}>&times;</button>
        </div>
      </div>
    );
  };

  const ModalBody = () => {
    return <div></div>;
  };

  // const [isShowModal, setIsShowModal] = useState(false);
  // const handleOpenModal = () => {
  //   setIsShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setIsShowModal(false);
  // };

  ReactModal.setAppElement('#root');

  return (
    <div>
      {/* <div>
        <button className="btn btn-primary" onClick={handleOpenModal}>
          SELECT WALLET
        </button>
      </div> */}

      {/* <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
        <ModalHeader />
        <ModalBody />
      </ReactModal> */}

      <ReactModal
        isOpen={props.isShowModal}
        contentLabel="Minimal Modal Example"
      >
        <ModalHeader />
        <ModalBody />
      </ReactModal>
    </div>
  );
};

const props = {};

export default Modal;
