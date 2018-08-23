import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '../../Components/SocialIcons';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
//import Nav from '@components/Nav';
//import ScrollToNext from '@components/ScrollToNext';
//import BrowserNotes from '@components/BrowserNotes';

import Grid from '@material-ui/core/Grid';

import theme from '../../Components/ThemeChanger/Themes';
//import './style.css';

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    height: '82vh'

  },
  outerContainer: {
    border: 'solid 1px blue'
  },
  introWrapper: {
    border: 'solid 1px pink'
  },
  introName: {
    border: 'solid 1px green',
    textAlign: 'center',
    [theme.breakpoints.up('xs')]: {
      fontSize: '4em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '6em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '8em'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '10em'
    }
  },
  tagline: {
    border: 'solid 1px orange',
    textAlign: 'center',
    margin: '1vh 0 2vh 0px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.5em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5em'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '7em'
    }
  },
  icons: {
    border: 'solid 1px purple',
    textAlign: 'center'
  }

});

class LandingPage extends React.Component {

  state = {
    hovered: false,
    boxColour: '0px 3px 0px 0px rgba(188, 188, 188, 0.2)'
  }


  handleMouseEnterHandler = () => {
    this.setState({
      hovered: true
    })
    //alert(this.state.hovered);
  }

  handleMouseLeaveHandler = () => {
    this.setState({
      hovered: true
    })
    //alert(this.state.hovered);
  }

  render() {

    const { classes } = this.props;

    return (
        <MuiThemeProvider theme={theme}>
          <Grid container alignItems='center' className={classes.root}>

            <Grid container className={classes.introWrapper}>
              
              <Grid
                item
                xs={12}

                className={classes.introName}
                onMouseEnter={this.handleMouseEnterHandler}
                onMouseLeave={this.handleMouseLeaveHandler}
              >
                Hello, I'm Sam!
              </Grid>

              <Grid item xs={12} className={classes.tagline}>
                Full Stack Dev | Tech Enthusiast | Teacher
              </Grid>

              <Grid item xs={12} className={classes.icons}>
                <SocialIcons />
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
    );
  };
}


LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default withStyles(styles)(LandingPage);
