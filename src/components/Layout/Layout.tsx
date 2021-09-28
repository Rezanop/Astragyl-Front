import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import TopNavBar from './TopNavBar/TopNavBar';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import Footer from './Footer/Footer';
import ResetCssWrapper from '../ResetCssWrapper/ResetCssWrapper';

const RightSideContent = styled.div`
  flex-grow: 1;
  width: auto;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const MainContent = styled.div`
  background-image: url('./reshot-woman-in-space.png');
`;

const Layout: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  return (
    <>
      <ResetCssWrapper />
      <LayoutWrapper>
        <LeftSideBar />

        <RightSideContent>
          <TopNavBar />
          <MainContent>{children}</MainContent>
          <Footer />
        </RightSideContent>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
