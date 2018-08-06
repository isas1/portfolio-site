import React from 'react';

//material-ui components 
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '../node_modules/@material-ui/core';
import { green500 } from 'material-ui/styles/colors';


const styles = {
  root: {
    flexGrow: 1,
  },
  navOverride: {
    //fixed cololur
    backgroundColor: green500
  },
};

const NavBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.navOverride} position='sticky'>
        <Toolbar>
          <Typography variant='title' color='inherit'> Generic Navbar
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles) (NavBar);
