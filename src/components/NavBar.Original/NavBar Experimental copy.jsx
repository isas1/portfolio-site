import React from 'react';

//pages
import LandingPage from '@pages/LandingPage';
import SplashAPI from '@pages/SplashAPI/SpashAPI';
import Todo from '@pages/Todo/Todo';
import Explore from '@pages/Explore/Explore';

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

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';

import theme from '../ThemeChanger/Themes';
const drawerWidth = 240;
// Navigation bar styles
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex', //prevents main content showing
    width: '100%'
  },
  active: {
    borderRadius: 100,
    boxShadow: '0 3px 10px 5px rgba(255, 255, 255, 0.1)'
  },
  alignRight: {
    alignItems: 'right'
  },
  content: {
    zIndex: 1,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  flex: {
    // Allows next icon/elemend in Navbar to 'float right'
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    position: 'absolute',
    marginLeft: this.mobileOpe ? drawerWidth : null,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    }
  },
  toolbar: theme.mixins.toolbar,

});

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
    active: false,
    anchorEl: null,
    mobileOpen: false,
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };


  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>First set of icons here...</List>
        <Divider />
        <List>Second set of icons here...</List>
      </div>
    );

    return (
      <MuiThemeProvider theme={this.props.theme} >
        <Router>
          <div className={classes.root}>
            <AppBar className={classes.appBar} position='static'>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>


                {/* divider between left and right icons */}
                <div className={classes.flex}></div>

                <div>

                  <IconButton>
                    <NavLink to="/" exact={true} activeClassName={classes.active}><HomeIcon color='secondary'></HomeIcon></NavLink>
                  </IconButton>

                  <IconButton>
                    <NavLink to="/todo" exact={true} activeClassName={classes.active}><FormatListNumberedIcon color='secondary'></FormatListNumberedIcon></NavLink>
                  </IconButton>

                  <IconButton>
                    <NavLink to="/pictures" exact={true} activeClassName={classes.active}><MonochromePhotoIcon color='secondary'></MonochromePhotoIcon></NavLink>
                  </IconButton>

                  {/* Delete to add fouth icon
                  <IconButton>
                    <NavLink to="/explore" exact={true} activeClassName={classes.active}><ExploreIcon color='secondary'></ExploreIcon></NavLink>
                  </IconButton>
                  */}

                </div>
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                variant="permanent"
                open
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <div className={classes.content}>

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
