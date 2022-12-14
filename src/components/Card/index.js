import React, { useState } from 'react';
import WalletType from '../WalletButton';

import './style.css';

const Card = (props) => {
  const { itemKey, image, quantity, chainLogo } = props;

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img src={image} alg="card-image" />
        </div>
        <div className="card-footer">
          <div className="card-footer-left">
            <figure>
              <img src={chainLogo} alt="qty-img" />
            </figure>
            &nbsp;
            <h5>{quantity}</h5>
          </div>
          <WalletType {...props} />
        </div>
      </div>
    </div>
  );
};

export default Card;
