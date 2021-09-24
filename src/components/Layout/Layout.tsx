import React, { FC, ReactNode } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div>
        <p> Layout</p>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
