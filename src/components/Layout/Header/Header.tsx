import React, { FC } from 'react';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <>
      <div>
        <Link to="/">Logo Here</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/learn-more">Learn More</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/play">Play</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
