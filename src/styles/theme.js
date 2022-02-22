import { createTheme, responsiveFontSizes } from '@mui/material/styles';


//fonts
import gilroyBoldOtf from "../../public/fonts/Gilroy-Bold.otf";
import gilroySemiBoldOtf from "../../public/fonts/Gilroy-SemiBold.otf";
import gilroyRegularOtf from "../../public/fonts/Gilroy-Regular.otf";
import gilroyMediumOtf from "../../public/fonts/Gilroy-Medium.otf";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3A406B",
      light: "#6A76AC"
    },
    secondary: {
      main: '#D5CDF9',
      pop: '#EB71FF'
    },
    error: {
      main: '#E34357'
    },
    success: {
      main: '#48D987'
    },
    other: {
      pop: "#EB71FF",
      grey1: "#868EAE",
      grey2: "#ADB3CC",
      grey3: "#DBDEEC",
      grey4: "#F6F6FA",
      blueAlt: "#6A76AC"
    },
    white: {
      main: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: [
      'Gilroy',
    ].join(',')
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        img: {
          objectFit: "contain"
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: `

        *, *::before, *::after {
             box-sizing: border-box;
        }

        @font-face  {
          font-family: "Gilroy";
          font-style: "normal";
          font-display: 'swap';
          font-weight: 400;
          src: local('Gilroy-Regular'), url(${gilroyRegularOtf}) format('opentype');
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF';
        }
        @font-face  {
          font-family: "Gilroy";
          font-style: "normal";
          font-display: 'swap';
          font-weight: 500;
          src: local('Gilroy-Medium'), url(${gilroyMediumOtf}) format('opentype');
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF';
        }

        @font-face  {
          font-family: "Gilroy";
          font-style: "normal";
          font-display: 'swap';
          font-weight: 700;
          src: local('Gilroy-Bold'), url(${gilroyBoldOtf}) format('opentype');
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF';
        }

         @font-face  {
          font-family: "Gilroy";
          font-style: "normal";
          font-display: 'swap';
          font-weight: 600;
          src: local('Gilroy-SemiBold'), url(${gilroySemiBoldOtf}) format('opentype');
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF';
        }

      `
    }
  }
});

export default responsiveFontSizes(theme);