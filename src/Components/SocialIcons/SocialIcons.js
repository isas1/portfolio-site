import React from 'react';
import PropTypes from 'prop-types';

import { FaGithub } from 'react-icons/fa';
import { FaSpaceShuttle } from 'react-icons/fa';
import { IconContext } from "react-icons";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import theme from '../../Components/ThemeChanger/Themes';

const styles = {
  icon: {
    marginRight: 15,
    marginLeft: 15
  }
}

class SocialIcons extends React.Component {

  render () {

    const {classes} = this.props;
    console.log(theme.palette.primary[50])

    return (

      <IconContext.Provider value={{ size: '4.5em', color: theme.palette.primary[500] }}>
      <Grid container justify='center'>
        <Grid item className={ classes.icon }><a href="https://github.com/isas1" ><FaGithub /></a></Grid>
        <Grid item className={ classes.icon }><a href="https://isas1.github.io" ><FaSpaceShuttle /></a></Grid>
          
          
          {/*
          <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/story/flexdinesh" ><i className="fab fa-stack-overflow">Stack Overflow</i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dineshpandiyan" ><i className="fab fa-linkedin">LinkedIn</i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@flexdinesh" ><i className="fab fa-medium"></i></a>
          <a className="devto" target="_blank" rel="noopener noreferrer" href="https://dev.to/flexdinesh"></a>
          */}
          </Grid>
        </IconContext.Provider>
    );
  }
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default withStyles(styles)(SocialIcons);
