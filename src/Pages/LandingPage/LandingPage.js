import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
//import Nav from '@components/Nav';
//import ScrollToNext from '@components/ScrollToNext';
//import BrowserNotes from '@components/BrowserNotes';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

import theme from '@components/ThemeChanger/Themes';
import Typer from '@components/Typewriter/Typer';


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
    color: theme.palette.primary[500],
    textAlign: 'center',
    textShadow: '4px 3px 0px #fff, 0.9vh 0.8vh 0px rgba(0,0,0,0.15)',

    [theme.breakpoints.up('xs')]: {
      fontSize: '2.5em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '5em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '6.5em'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '7.25em'
    }
  },
  tagline: {
    textAlign: 'center',
    margin: '1vh 0 2vh 0px',
    color: theme.palette.secondary[500],
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.5em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4em'
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '5em'
    }
  },
  icons: {
    textAlign: 'center'
  },
  paper: {
    margin: 20,
    backgroundColor: '#eee',
    backgroundImage: 'https://source.unsplash.com/7bwQXzbF6KE/800x500'
    //backgroundImage: 'linear-gradient(to bottom, #ffffcf, #fff7dd, #fff6f5, #fffbff, #ffffff)'
  }

});

class LandingPage extends React.Component {

  state = {
    hovered: false,
    boxColour: '0px 3px 0px 0px rgba(188, 188, 188, 0.2)',
    loaded: true
  }


  handleMouseEnterHandler = () => {
    this.setState({
      hovered: true
    })
  }

  handleMouseLeaveHandler = () => {
    this.setState({
      hovered: true
    })
  }

  render() {

    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>

        <Grow in={true} timeout={500}>
          <Paper elevation={1} className={classes.paper}>
            <Grid container alignItems='center' className={classes.root}>

              <Grid container className={classes.introWrapper}>

                <Grid
                  item
                  xs={12}

                  className={classes.introName}
                  onMouseEnter={this.handleMouseEnterHandler}
                  onMouseLeave={this.handleMouseLeaveHandler}
                >
                  Hello, I'm Sam :)
                </Grid>

                <Grid item xs={12} className={classes.tagline}>
                  <Typer></Typer>

                </Grid>
                <Grid item xs={12} className={classes.icons}>

                  <SocialIcons />

                </Grid>

              </Grid>

            </Grid>
          </Paper>
        </Grow>
      </MuiThemeProvider>
    );
  };
}


LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default withStyles(styles)(LandingPage);
