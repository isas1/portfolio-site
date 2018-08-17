import React from 'react';

//pages
import LandingPage from '../../Pages/LandingPage';
import SplashAPI from '../../Pages/SplashAPI/SpashAPI';
import Todo from '../../Pages/Todo/Todo';
import Explore from '../../Pages/Explore/Explore';

//material-ui

//components

import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles, MuiThemeProvider } from '@material-ui/core';

//icons and colours

import FormatListNumberedIcon from '@material-ui/icons/FormatListNumberedRounded';
import HomeIcon from '@material-ui/icons/HomeRounded';
import MonochromePhotoIcon from '@material-ui/icons/MonochromePhotosRounded';
import ExploreIcon from '@material-ui/icons/ExploreRounded';
import FormatPaintIcon from '@material-ui/icons/FormatPaintRounded';

import styles from './styles';
//import theme from '../../Components/ThemeChanger/Themes';
console.log(this.state)

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
  },
  {
    path: "/explore",
    sidebar: () => <Explore />,
    main: () => <h2>Explore</h2>
  }
];

class NavBar extends React.Component {

  
  state = {
    //auth: true,
    anchorEl: null,
    active: false
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleThemeSwitch = (classes) => {
    null
  }
  

  render() {



    const { classes } = this.props;
    //const { anchorEl } = this.state;
    //const open = Boolean(anchorEl);
    return (
      <MuiThemeProvider theme={this.props.theme} >
      <Router>
        <div className={classes.root}>
            <AppBar className={classes.navOverride} position='static'>
              <Toolbar>

                <IconButton>
                  <FormatPaintIcon color='secondary' onClick={this.handleThemeSwitch({ classes })}></FormatPaintIcon>
                </IconButton>

                {/* divider between left and right icons */}
                <div className={classes.flex}></div>

                <div style={{ display: "flex" }}>

                  <IconButton>
                    <NavLink to="/" exact={true} activeClassName={classes.active}><HomeIcon color='secondary'></HomeIcon></NavLink>
                  </IconButton>

                  <IconButton>
                    <NavLink to="/todo" exact={true} activeClassName={classes.active}><FormatListNumberedIcon color='secondary'></FormatListNumberedIcon></NavLink>
                  </IconButton>

                  <IconButton>
                    <NavLink to="/pictures" exact={true} activeClassName={classes.active}><MonochromePhotoIcon color='secondary'></MonochromePhotoIcon></NavLink>
                  </IconButton>

                  <IconButton>
                    <NavLink to="/explore" exact={true} activeClassName={classes.active}><ExploreIcon color='secondary'></ExploreIcon></NavLink>
                  </IconButton>

                </div>
              </Toolbar>
            </AppBar>
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
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(NavBar);
