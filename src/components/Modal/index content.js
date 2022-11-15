import React, { useState } from "react";
import ReactModal from 'react-modal';

import "./style.css";

const ModalHeader = () => {
  return (
    <div> Select your wallet</div>
  )
}

const ModalBody = () => {
  return (
    <div></div>
  )
}

const Modal = () => {
  return (
    <>
      <ModalHeader />
      <ModalBody />
    </>
  )
}

export default Modal;