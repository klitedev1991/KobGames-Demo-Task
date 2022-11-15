import React from "react";

import "./style.css";

const Item = (props) => {
  const { image, opened, won, token_type, signature, time } = props;

  const handleItemClick = () => {
    window.open(`https://explorer.solana.com/tx/${signature}?cluster=mainnet-beta`, '_blank');
  }

  return (
    <div className="item-container">
      <div className="item" onClick={() => handleItemClick()}>
        <div className="item-inner">
          <img src={image} className="item-img" alt="OpenedBox" />
          <h6>
            AWW...fT5 opened {opened} {token_type} and won {won} {token_type}
          </h6>
        </div>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Item;
