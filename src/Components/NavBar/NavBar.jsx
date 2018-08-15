import React from 'react';

//pages
import LandingPage from '../../Pages/LandingPage';
import SplashAPI from '../../Pages/SplashAPI/SpashAPI';
import Todo from '../../Pages/Todo/Todo';

//material-ui

//components

import AppBar from '@material-ui/core/AppBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles, MuiThemeProvider } from '@material-ui/core';

//icons and colours

import FormatListNumbered from '@material-ui/icons/FormatListNumberedRounded';
import Home from '@material-ui/icons/HomeRounded';
import MonochromePhoto from '@material-ui/icons/MonochromePhotosRounded';

import styles from './styles';
import theme from '../../Components/ThemeChanger/Themes';

console.log(theme);
//react-router-dom routes
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <LandingPage />,
    main: () => <h2>Home</h2>
  },
  {
    path: "/todo",
    sidebar: () => <Todo />,
    main: () => <h2>Todo</h2>
  },
  {
    path: "/pictures",
    sidebar: () => <SplashAPI />,
    main: () => <h2>SplashAPI</h2>
  }
];

class NavBar extends React.Component {

  state = {
    //auth: true,
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { classes } = this.props;
    //const { anchorEl } = this.state;
    //const open = Boolean(anchorEl);

    return (
      <Router>
        <div className={classes.root}>
          <MuiThemeProvider theme={theme}>
            <AppBar className={classes.navOverride} position='static'>
              <Toolbar>

                <div className={classes.flex}></div>

                <div style={{ display: "flex" }}>

                  <IconButton>
                    <Link to="/"><Home color='secondary'></Home></Link>
                  </IconButton>

                  <IconButton>
                    <Link to="/todo"><FormatListNumbered color='secondary'></FormatListNumbered></Link>
                  </IconButton>

                  <IconButton>
                    <Link to="/pictures"><MonochromePhoto color='secondary'></MonochromePhoto></Link>
                  </IconButton>

                </div>
              </Toolbar>
            </AppBar>
          </MuiThemeProvider>
          <div>

            {routes.map((route, index) => (

              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />

            ))}

          </div>
        </div>
      </Router>
    )
  }
}

export default withStyles(styles)(NavBar);
