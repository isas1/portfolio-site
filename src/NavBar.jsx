import React from 'react';

//material-ui components 
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
import Inputs from './Inputs.jsx';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import { purple500 } from 'material-ui/styles/colors';
import { withStyles } from '../node_modules/@material-ui/core';

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
    //fixed cololur
    backgroundColor: purple500
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  alignRight: {
    alignItems: 'right'
  }
};

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <p>Inputs page</p>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/page1",
    sidebar: () => <div>Page 1</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

class NavBar extends React.Component {

  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar className={classes.navOverride} position='static'>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' className={classes.flex}> Generic Navbar
            </Typography>

            <Router>
              <div style={{ display: "flex" }}>
                <IconButton color='inherit'>
                  <Link to="/"><ThreeDRotationIcon></ThreeDRotationIcon></Link>
                </IconButton>
                <IconButton color='inherit'>
                  <Link to="/page1"><DeleteOutlinedIcon></DeleteOutlinedIcon></Link>
                </IconButton>
              </div>
            </Router>


            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
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
          </Toolbar>
        </AppBar>
        <Router>
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
        </Router>
      </div>
    )
  }

}

export default withStyles(styles)(NavBar);
