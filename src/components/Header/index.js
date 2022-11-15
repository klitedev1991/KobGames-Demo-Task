import React from 'react';
import { Link } from 'react-router-dom';

import { useWindowWidthAndHeight } from '../../utils/customHooks';
import Navbar from '../Navbar';
import SmallScreensNavbar from '../SmallScreenNavbar';

import './style.css';

const Header = (props) => {
  const [width, height] = useWindowWidthAndHeight();

  return (
    <header className={width > 993 ? '' : 'header-fixed'}>
      <div className="header-inner">
        {width > 993 ? (
          <Navbar navClass="nav-big" linkClassName="nav-big-link" {...props} />
        ) : (
          <SmallScreensNavbar
            navClass="nav-small"
            linkClassName="nav-small-link"
            {...props}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
