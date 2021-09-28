import React, { FC } from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '../../../assets/reshot-rocket-colors.svg';

/** SocialsSideBar Wrapper Component */
const SideBarWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 6em;
  background-color: ${(props) => props.theme.palette.color8};
`;

/** Logo Component */
const Logo = styled(LogoSVG)`
  width: 5em;
  padding: 1em;
`;
/** Social */
const SocialsGroup = styled.ul`
  list-style: none;
  height: auto;
`;
const SocialButton = styled.li``;
const SocialIcon = styled.i``;

const SocialsSideBar: FC = () => {
  return (
    <SideBarWrapper>
      <Logo />

      <SocialsGroup>
        <SocialButton>
          <SocialIcon></SocialIcon>
        </SocialButton>
      </SocialsGroup>
    </SideBarWrapper>
  );
};

export default SocialsSideBar;
