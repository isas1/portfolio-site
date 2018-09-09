import React from 'react';
import PropTypes from 'prop-types';
//import IconTransitions from './IconTransitions';
import { FaGithub } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaSpaceShuttle } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import theme from '@theme';

const styles = {

  icon: {
    marginRight: 10,
    marginLeft: 10
  },
  iconDevTo: {
    color: theme.palette.primary[500]
  },
  popover: {
    // Targets popover to specific item - spaceship.
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing.unit,
  },

  defaultStyle: {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0
  },
  transitionStyles: {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }
}

class SocialIcons extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      item: '',
      iconSize: '3em'
    };

    this.updateIconSize = this.updateIconSize.bind(this);
  }

  updateIconSize() {
    if (window.innerWidth < 600) {
      this.setState({
        iconSize: '2.5em'
      })
    } else if (window.innerWidth > 599) {
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
    window.addEventListener("resize", this.updateIconSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIconSize);
  }


  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (

      <IconContext.Provider value={{ size: this.state.iconSize, color: theme.palette.primary[500] }}>
        <Grid container justify='center' >

          <Grid item className={this.props.classes.icon}>
            <a href="https://github.com/isas1" ><FaGithub /></a>
          </Grid>

          <Grid item className={classes.icon}>
            <a href="https://www.linkedin.com/in/samisaacs1/" ><FaLinkedin /></a>
          </Grid>

          <Grid item className={classes.icon}>
            <a href="https://theinterestgame.com/#!/landing" ><FaMoneyBillAlt /></a>
          </Grid>





          {/*
          <Grid item className={classes.icon}>
            <a href="https://dev.to/isas1">
              <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Mr.I's DEV Profile" height="30" width="30" className={classes.iconDevTo} />
            </a>
          </Grid>
          */}

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
