import { createMuiTheme } from '@material-ui/core/styles';

// import themes and colours here
import deepPurple from '@material-ui/core/colors/deepPurple';
import lightBlue from '@material-ui/core/colors/lightBlue';

import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';

import brown from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';

import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';

import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';

// create individual themes

// create an array of themes - consider moving to seperate file
const allThemes = 
[
  {
    name: 'theme1',
    primary: deepPurple,
    secondary: lightBlue
  },
  {
    name: 'theme2',
    primary: grey,
    secondary: yellow
  },
  {
    name: 'theme3',
    primary: brown,
    secondary: green
  },
  {
    name: 'theme4',
    primary: indigo,
    secondary: lightBlue
  },
  {
    name: 'theme5',
    primary: blue,
    secondary: red
  },
  {
    name: 'theme6',
    primary: orange,
    secondary: indigo
  }
]

// create a function to choose a random theme from an array of themes
function getTheme() {

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
export default (theme); // passes the theme as a property