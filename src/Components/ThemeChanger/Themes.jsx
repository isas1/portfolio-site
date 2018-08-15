import { createMuiTheme } from '@material-ui/core/styles';

// import themes and colours here
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';

// create individual themes


// create an array of themes
const themes = {
  theme1: [purple, green],
  theme2: [grey, yellow]
}

// create a starting theme
const theme = createMuiTheme({
  palette: {
    primary: themes.theme1[0],
    secondary: themes.theme1[1]
  },
});

// create a function to choose a random theme from an array of themes


// create a function to set the state of theme

// export the theme - to be availble ar 'theme' by other components
export default theme;