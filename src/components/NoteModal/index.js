import React from "react";
import ReactModal from "react-modal";

import "./style.css";

const NoteModal = (props) => {
  const { isShowModal, closeModal } = props;

  return (
    <>
      <ReactModal
        isOpen={isShowModal}
        className="note-modal"
        contentLabel="Minimal Modal Example"
        onRequestClose={() => closeModal()}
      >
        <div className="note-modal-container">
          <h4>Congrats! You won 0.025 SOL.</h4>
        </div>
      </ReactModal>
    </>
  );
};

export default NoteModal;
