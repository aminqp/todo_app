import { blue, green, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        fontFamily: 'Nunito'
      }
    },
    MuiInputLabel: {
      root: {
        fontFamily: 'Nunito'
      }
    },
    MuiMenuItem: {
      root: {
        fontFamily: 'Nunito',
        fontSize: '12px',
        fontWeight: 300
      }
    },
    MuiOutlinedInput: {
      root: {
        fontFamily: 'Nunito'
      }
    }
  },
  palette: {
    background: {
      default: '#fff'
    },
    blue: {
      main: blue['300']
    },
    error: {
      main: red.A400
    },
    gold: {
      main: '#f0e522'
    },
    gray: {
      light: '#a4a4a4',
      main: '#525252'
    },
    green: {
      main: green.A200
    }
  },
  typography: {
    fontFamily: 'Nonito'
  }
});

export default appTheme;
