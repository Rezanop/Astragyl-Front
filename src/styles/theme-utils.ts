import { DefaultTheme } from 'styled-components';

export const isOrWider = (size: string): string => {
  return `screen and (min-width: ${size})`;
};

export type ThemeDevice = 'mobileS' | 'mobile' | 'laptop' | 'laptopL' | 'desktop';

export const than = (bpSize: ThemeDevice, theme: DefaultTheme): string => {
  return theme.breakpoints[bpSize];
};
