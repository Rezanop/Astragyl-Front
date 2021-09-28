import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/* Navigation Top Bar Wrapper Component */
const NavigationBarWrapper = styled.nav`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: ${(props) => props.theme.palette.color8};
`;

/* Navigation Buttons Group Wrapper */
const NavButtonGroup = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  flex-grow: 1;
`;
// Navigation Button
const NavButton = styled.li`
  padding: 1em;
`;
// Navigation Link
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 1em;
  color: white;
  &:visited {
    color: white;
  }
`;

/**
 * Handles all the logic and rendering of the Top Bar Navigation
 * @returns NavigationTopBar Component
 */
const NavigationTopBar: FC = () => {
  return (
    <NavigationBarWrapper>
      <NavButtonGroup>
        <NavButton>
          <Link to="/">Home</Link>
        </NavButton>
        <NavButton>
          <Link to="/about-the-game">About The Game</Link>
        </NavButton>
        <NavButton>
          <Link to="/about-me">About Us</Link>
        </NavButton>
        <NavButton>
          <Link to="/contact-us">Contact Us</Link>
        </NavButton>
      </NavButtonGroup>
    </NavigationBarWrapper>
  );
};

export default NavigationTopBar;
