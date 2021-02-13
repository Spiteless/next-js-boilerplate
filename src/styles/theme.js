import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

//fonts
import gtAmericaRegularOtf from "../../public/fonts/GT-America-Regular.otf";
import gtAmericaBoldOtf from "../../public/fonts/GT-America-Bold.otf";
import gtAmericaLightOtf from "../../public/fonts/GT-America-Light.otf";
import gtAmericaMediumOtf from "../../public/fonts/GT-America-Medium.otf";
import plainRegularOtf from "../../public/fonts/Plain-Regular.otf";

const gtAmericaRegular = {
  fontFamily: "GT America",
  fontStyle: "normal",
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('GT America Regular'),
    url(${gtAmericaRegularOtf}) format('opentype')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const gtAmericaBold = {
  fontFamily: "GT America",
  fontStyle: "normal",
  fontWeight: 700,
  fontDisplay: 'swap',
  src: `
    local('GT America Bold'),
    local('GTAmerica-Bold'),
    url(${gtAmericaBoldOtf}) format('opentype')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'

};

const gtAmericaMedium = {
  fontFamily: "GT America",
  fontStyle: "normal",
  fontWeight: 500,
  fontDisplay: 'swap',
  src: `
    local('GT America Medium'),
    local('GTAmerica-Medium'),
    url(${gtAmericaMediumOtf}) format('opentype')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'

};

const gtAmericaLight = {
  fontFamily: "GT America",
  fontStyle: "normal",
  fontWeight: 300,
  fontDisplay: 'swap',
  src: `
    local('GT America Light'),
    local('GTAmerica-Light'),
    url(${gtAmericaLightOtf}) format('opentype')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'

};

const plainRegular = {
  fontFamily: "Plain",
  fontStyle: "normal",
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `
    local('Plain'),
    url(${plainRegularOtf}) format('opentype')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'

};

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3849E7"
    }
  },
  typography: {
    fontFamily: [
      'GT America',
      'Plain'
    ].join(',')
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [gtAmericaRegular,gtAmericaMedium,gtAmericaBold,gtAmericaLight,plainRegular],
      },
    },
  },
});

export default responsiveFontSizes(theme);