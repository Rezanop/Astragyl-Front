import React, { FC } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../../router/routes';

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
  padding: 1em 1em;
  margin: 0 1em;
  min-width: 14%;
  text-align: center;
`;

// Navigation NavLink
const NavLink = styled(Link)`
  text-decoration: none;
  padding: 1em;
  color: ${(props) => props.theme.palette.color3};
  opacity: 0.9;
  &:visited {
    color: ${(props) => props.theme.palette.color3};
  }
  &.${(props) => props.activeClassName} {
    color: ${(props) => props.theme.palette.color9};
    text-decoration-line: underline;
    text-underline-offset: 100%;
    opacity: 1;
    font-weight: bold;
  }
  ${NavButton}:hover & {
    color: ${(props) => props.theme.palette.color9};
    font-weight: bold;
  }
`;

/**
 * Handles all the logic and rendering of the Top Bar Navigation
 * @returns NavigationTopBar Component
 */
const NavigationTopBar: FC = (props) => {
  console.log('Props: ', props);
  return (
    <NavigationBarWrapper>
      <NavButtonGroup>
        {routes
          .filter((routeInfo) => routeInfo.showInNav)
          .map((route) => ({ name: route.name, path: route.path, exact: route.exact }))
          .map((routePathAndName) => {
            return (
              <NavButton key={routePathAndName.path}>
                <NavLink
                  exact={routePathAndName.exact}
                  activeClassName="activeLink"
                  to={routePathAndName.path}
                >
                  {routePathAndName.name}
                </NavLink>
              </NavButton>
            );
          })}
      </NavButtonGroup>
    </NavigationBarWrapper>
  );
};

export default NavigationTopBar;
