import React from "react";
import ReactModal from "react-modal";

import "./style.css";

const AnimationModal = (props) => {
  const { isShowModal, setPlayEnded } = props;

  const handleEndedVideo = () => {
    setPlayEnded();
  };

  return (
    <>
      <ReactModal
        isOpen={props.isShowModal}
        className="video-modal"
        contentLabel="Minimal Modal Example"
      >
        <>
          <video
            width="100%"
            height="100%"
            onEnded={() => handleEndedVideo()}
            autoplay=""
          >
            <source
              src="https://res.cloudinary.com/dtgfpjvoi/video/upload/q_auto:best,c_scale,w_700/lootbox/videos-with-sounds/lootbox1.webm"
              type="video/webm"
            />
          </video>
        </>
      </ReactModal>
    </>
  );
};

export default AnimationModal;
