import React from 'react';

//material-ui

//components
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles, MuiThemeProvider } from '@material-ui/core';

//icons and colours
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumberedRounded';
import ArtTrackIcon from '@material-ui/icons/ArtTrackRounded';
import HomeIcon from '@material-ui/icons/HomeRounded';
import MonochromePhotoIcon from '@material-ui/icons/MonochromePhotosRounded';

//import CreateRoutes from '@utilities/create-routes.jsx'
import styles from './styles';
import routes from '@utilities/routes.jsx';

class NavBar extends React.Component {
  
  state = {
    anchorEl: null,
    active: false
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  

  render() {

    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={this.props.theme} >
      <Router>
        <div className={classes.root}>
            <AppBar color='primary' position='static'>
              <Toolbar>

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
                    <NavLink to="/explore" exact={true} activeClassName={classes.active}><ArtTrackIcon color='secondary'></ArtTrackIcon></NavLink>
                  </IconButton>

                </div>
              </Toolbar>
            </AppBar>
          <div>
          
          
            {/*<CreateRoutes />*/}

            {
              routes.map((route, index) => 
              (
                <Route 
                  key={index} 
                  path={route.path} 
                  exact={route.exact} 
                  component={route.sidebar} 
                />
              )
            )
            }

          </div>
        </div>
      </Router>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(NavBar);
