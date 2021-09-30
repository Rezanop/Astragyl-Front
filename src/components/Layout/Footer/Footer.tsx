import React, { FC } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
`;

const QuickNavigation = styled.div``;
const QuickNavigationGroup = styled.div``;
const QuickLinksList = styled.ul``;
const QuickLink = styled.li``;

const DevelopmentStrip = styled.div``;

const CopyrightsInfo = styled.div``;

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <QuickNavigation>
        <QuickNavigationGroup>
          <QuickLink />
        </QuickNavigationGroup>
      </QuickNavigation>

      <DevelopmentStrip />

      <CopyrightsInfo />
    </FooterWrapper>
  );
};

export default Footer;
