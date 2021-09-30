import 'styled-components';

declare module 'styled-components' {
  export type Device = 'mobileS' | 'mobile' | 'laptop' | 'laptopL' | 'desktop';
  export interface DefaultTheme {
    dark: {
      colors: {
        main: string;
        second: string;
        third: string;
      };
    };
    light: {
      colors: {
        main: string;
        second: string;
        third: string;
      };
    };
    palette: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
      color5: string;
      color6: string;
      color7: string;
      color8: string;
      color9: string;
      gray: {
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        gray600: string;
        gray700: string;
        gray800: string;
        gray900: string;
        gray1000: string;
      };
    };
    breakpoints: {
      mobileS: string;
      mobile: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
    typography: {
      title: {
        main: string;
        secondary: string;
      };
      text: {
        main: string;
        secondary: string;
      };
      sizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
    };
  }
}
