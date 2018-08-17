import { createMuiTheme } from '@material-ui/core/styles';

// import themes and colours here
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';

// create individual themes

// create an array of themes - consider moving to seperate file
const allThemes = 
[
  {
    name: 'theme1',
    primary: purple,
    secondary: green
  },
  {
    name: 'theme2',
    primary: grey,
    secondary: yellow
  }
]

// create a function to choose a random theme from an array of themes
const getTheme = () => {

  const randomThemeIndex = Math.floor(
    (Math.random() * (allThemes.length))
  );
  // create a starting theme
  const currentTheme = createMuiTheme({
    palette: {
      primary: allThemes[randomThemeIndex].primary,
      secondary: allThemes[randomThemeIndex].secondary
    },
  });
  return currentTheme;
}

const theme = getTheme();

// create a function to set the state of theme

// export the theme - to be availble ar 'theme' by other components
export default theme;