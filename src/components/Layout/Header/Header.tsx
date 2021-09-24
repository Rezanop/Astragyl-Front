import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <nav>
      <div>
        <i>Logo Here</i>
      </div>
      {/** Browser Router Should be Here */}
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/learn-more">Learn More</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
        <li>
          <a href="/play">Play</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
