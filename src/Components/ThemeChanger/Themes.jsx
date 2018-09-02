import { createMuiTheme } from '@material-ui/core/styles';

// import themes and colours
import blue from '@material-ui/core/colors/blue';
import brown from '@material-ui/core/colors/brown';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal';


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
    primary: teal,
    secondary: grey
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
    secondary: grey
  },
  {
    name: 'theme6',
    primary: orange,
    secondary: indigo
  }
]


function getTheme() {

  // choose a random theme
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

// export the theme - to be availble as 'theme' by other components via MuiThemeProvider
export default (theme); // passes the theme as a property
