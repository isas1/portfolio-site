import React from 'react';
import PropTypes from 'prop-types';

import { FaGithub } from 'react-icons/fa';
import { FaSpaceShuttle } from 'react-icons/fa';
import { IconContext } from "react-icons";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import theme from '../../Components/ThemeChanger/Themes';

const styles = {

  icon: {
    marginRight: 10,
    marginLeft: 10
  },
  popover: {
    // Targets popover to specific item - spaceship.
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing.unit,
  }
}

class SocialIcons extends React.Component {
  state = {
    anchorEl: null,
    item: '',
    iconSize: '3em'
  };

  updateIconSize() {
    if(window.innerWidth > 599) {
      this.setState({
        iconSize: '4em'
      })
    } else if (window.innerWidth > 959) {
      this.setState({
        iconSize: '5em'
      })
    }
  }

  // Sets icon size when component first mounts
  componentDidMount() {
    this.updateIconSize();
    window.addEventListener("resize", this.updateIconSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIconSize.bind(this));
  }


  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log('handlePopoverOpen');
    console.log(this.state.anchorEl);
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
    console.log('handlePopoverClose');
  };

  render() {

    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (

      <IconContext.Provider value={{ size: this.state.iconSize, color: theme.palette.primary[500] }}>
        <Grid container justify='center' >

          <Grid item className={classes.icon}>
            <a href="https://github.com/isas1" ><FaGithub/></a>
          </Grid>

          <Grid item className={classes.icon}>
            <a href="https://isas1.github.io" >

              <Typography
                onMouseEnter={this.handlePopoverOpen}
                onMouseLeave={this.handlePopoverClose}>
                <FaSpaceShuttle />
              </Typography>

              <Popover
                id="spaceship-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={this.handlePopoverClose}
              >
                <Typography>Colours not quite right? </Typography>
              </Popover>
            </a>
          </Grid>


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
