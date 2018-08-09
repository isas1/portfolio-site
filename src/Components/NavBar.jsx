import React from 'react';

//pages
import LandingPage from '../Pages/LandingPage';
import SplashAPI from '../Pages/SplashAPI/SpashAPI';
import Todo from '../Pages/Todo';

//material-ui

//components

import AppBar from '@material-ui/core/AppBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
//import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '../../node_modules/@material-ui/core';

//icons and colours

import FormatListNumbered from '@material-ui/icons/FormatListNumberedRounded';
import Home from '@material-ui/icons/HomeRounded';
//import Menu from '@material-ui/core/Menu';
//import MenuIcon from '@material-ui/icons/Menu';
import MonochromePhoto from '@material-ui/icons/MonochromePhotosRounded';

import { purple300 } from 'material-ui/styles/colors';

// Navigation bar styles
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    // Allows next icon/elemend in Navbar to 'float right'
    flexGrow: 1,
  },
  navOverride: {
    // fixed cololur - consider changing with theme
    backgroundColor: purple300
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  alignRight: {
    alignItems: 'right'
  }
};

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
          <AppBar className={classes.navOverride} position='static'>
            <Toolbar>
              
              <div className={classes.flex}></div>

              <div style={{ display: "flex" }}>
                <IconButton color='inherit'>
                  <Link to="/"><Home></Home></Link>
                </IconButton>
                <IconButton color='inherit'>
                  <Link to="/todo"><FormatListNumbered></FormatListNumbered></Link>
                </IconButton>
                <IconButton color='inherit'>
                  <Link to="/pictures"><MonochromePhoto></MonochromePhoto></Link>
                </IconButton>
              </div>

              {/*
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
              */}
            </Toolbar>
          </AppBar>

          <div>

            {/* Switching to page 1 but not rendering page 1 */}
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.

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
