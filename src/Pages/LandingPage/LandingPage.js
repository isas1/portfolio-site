import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '../../Components/SocialIcons';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
//import Nav from '@components/Nav';
//import ScrollToNext from '@components/ScrollToNext';
//import BrowserNotes from '@components/BrowserNotes';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import theme from '../../Components/ThemeChanger/Themes';
//import './style.css';

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    height: '82vh'

  },
  outerContainer: {
  },
  introWrapper: {
  },
  introName: {
    textAlign: 'center',
    textShadow: '4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)',
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
    textAlign: 'center'
  },
  paper: {
    margin: 20,
    //backgroundImage: 'linear-gradient(to bottom, #ffffcf, #fff7dd, #fff6f5, #fffbff, #ffffff)'
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
        <Paper elevation='5' className={classes.paper}>
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
          </Paper>
        </MuiThemeProvider>
    );
  };
}


LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default withStyles(styles)(LandingPage);
