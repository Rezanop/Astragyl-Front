import React, { FC } from 'react';
import styled from 'styled-components';

import socials from '../../../constants/socials';

import { ReactComponent as LogoSVG } from '../../../assets/img/reshot-rocket-colors.svg';

/** SocialsSideBar Wrapper Component */
const SideBarWrapper = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  width: 10%;
  height: 100vh;
  padding: 10px;

  background-color: ${(props) => props.theme.palette.color8};
`;

/** Logo Component */
const Logo = styled(LogoSVG)`
  width: 80%;
  max-width: 80px;
`;

/** Divider */
const Divider = styled.hr`
  width: 90%;

  border-width: 1px;
  border-color: ${(props) => props.theme.palette.color3};
`;

/** GameName */
const GameName = styled.h5`
  padding: 1;
  margin: 6px 0 4px 0;
  opacity: 0.9;

  color: ${(props) => props.theme.palette.color3};

  font-size: ${(props) => props.theme.typography.sizes.sm};
`;

/** Social */
const SocialsGroup = styled.ul`
  list-style: none;
  padding-inline-start: 0;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  height: 50%;
  margin: auto 0;
`;

const SocialButton = styled.li`
  width: 30%;
`;
const SocialLink = styled.a``;

const socialsMedia = socials.map((social) => ({
  ...social,
  icon: styled(social.icon)`
    width: 100%;
    max-width: 100px;

    color: ${(props) => props.theme.palette.color3};
  `,
}));

const SocialsSideBar: FC = () => {
  return (
    <SideBarWrapper>
      <Logo />
      <GameName>Astragyl</GameName>
      <Divider />
      <SocialsGroup>
        {socialsMedia.map((socialInfo) => {
          return (
            <SocialButton key={socialInfo.name}>
              <SocialLink
                href={socialInfo.url}
                target="_blank"
                rel={socialInfo.withReferal ? 'noopener noreferrer' : ''}
              >
                <socialInfo.icon />
              </SocialLink>
            </SocialButton>
          );
        })}
      </SocialsGroup>
    </SideBarWrapper>
  );
};

export default SocialsSideBar;
