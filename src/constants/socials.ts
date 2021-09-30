import React, { ComponentType } from 'react';
import { ReactComponent as MediumSVG } from '../assets/icons/medium.svg';
import { ReactComponent as TwitterSVG } from '../assets/icons/twitter.svg';
import { ReactComponent as GithubSVG } from '../assets/icons/github.svg';
import { ReactComponent as LaptopSVG } from '../assets/icons/laptop.svg';

export interface SocialMediaInfo {
  name: string;
  icon: ComponentType;
  url: string;
  withReferal: boolean;
}

const socials: SocialMediaInfo[] = [
  {
    name: 'Twitter',
    icon: TwitterSVG,
    url: 'https://twitter.com/Nacer_Kajoui',
    withReferal: false,
  },
  {
    name: 'Github',
    icon: GithubSVG,
    url: 'https://github.com/rezanop',
    withReferal: false,
  },
  {
    name: 'Medium',
    icon: MediumSVG,
    url: 'https://medium.com/@nacer.kajoui',
    withReferal: false,
  },
  {
    name: 'Personal Website',
    icon: LaptopSVG,
    url: 'https//ahmed-nacer-kajoui.com',
    withReferal: true,
  },
];

export default socials;
