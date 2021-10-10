import React, { ComponentType } from 'react';

import Home from '../pages/Home/Home';
import Play from '../pages/Play/Play';
import LearnMore from '../pages/LearnMore/LearnMore';
import ContactUs from '../pages/ContactUs/ContactUs';
import AboutTheGame from '../pages/AboutTheGame/AboutTheGame';

export interface AppRoute {
  name: string;
  path: string;
  exact: boolean;
  showInNav: boolean;
  component: ComponentType;
}

const routes: AppRoute[] = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
    showInNav: true,
  },
  {
    name: 'Play',
    path: '/play',
    exact: true,
    component: Play,
    showInNav: false,
  },
  {
    name: 'About the Game',
    path: '/about-the-game',
    exact: true,
    component: AboutTheGame,
    showInNav: true,
  },
  {
    name: 'Our story',
    path: '/about-us',
    exact: true,
    component: LearnMore,
    showInNav: true,
  },
  {
    name: 'Contact us',
    path: '/contact-us',
    exact: true,
    component: ContactUs,
    showInNav: true,
  },
];

export default routes;
