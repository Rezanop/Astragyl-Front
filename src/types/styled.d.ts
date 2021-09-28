import 'styled-components';

declare module 'styled-components' {
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
    };
  }
}
