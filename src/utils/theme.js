import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eceff1',
    },
  },
  typography: {
    useNextVariants: true,
  }
});

export default theme;