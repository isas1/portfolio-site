import { endpoint, CLIENT_ID } from './creds';

import React from 'react';

//material-ui
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Search from '@material-ui/icons/Search';

import theme from '../../Components/ThemeChanger/Themes';

import ParticleEffectButton from 'react-particle-effect-button';

const styles = theme => ({
  root: {
    flexgrow: 1
  },
  image: {
    padding: theme.spacing.unit * 2
  },
  inputs: {
    paddingBottom: theme.spacing.unit * 3
  },
  paperBg: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
})

class SpashAPIPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loadingState: true,
      hidden: false
    };

    this.query = '';
    this.trackQueryValue = this.trackQueryValue.bind(this);
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    fetch(`${endpoint}?query=${this.query}&client_id=${CLIENT_ID}`)
      .then(response => {
        return response.json()
      }).then(jsonResponse => {
        this.setState({
          images: jsonResponse.results,
          hidden: true
        })
      })
  }

  trackQueryValue(ev) {
    this.query = ev.target.value;
  }

  images() {
    return this.state.images.map(image => {
      return <Grid item key={image.id}>
        <Paper className={this.props.image}>

          <img src={image.urls.thumb} alt={image.description} />

        </Paper>
      </Grid>
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/*Photos in here*/}
        <MuiThemeProvider theme={theme}>
          <Paper className={classes.paperBg}>
            <h2>Photo finder</h2>

            <form onSubmit={this.search}>
              {/* Input container */}

              <Grid container justify='center' alignItems='flex-end' className={classes.inputs} spacing={8}>
                
                  <Grid item>
                  <ParticleEffectButton color='#121019' hidden={this.state.hidden}>
                    <Search />
                    </ParticleEffectButton>
                  </Grid>
                  <Grid item>
                  <ParticleEffectButton color='#121019' hidden={this.state.hidden}>
                    <TextField
                      type="text"
                      label="Type here"
                      onChange={this.trackQueryValue}
                      onFocus={this.rei}
                    />

                    <Button color='primary' onClick={this.search} type='submit'>Go</Button>

                </ParticleEffectButton>
                  </Grid>
              </Grid>
            </form>

            {/* Output container for images */}
            <Grid container spacing={16} justify='space-evenly'>
              {this.images()}
            </Grid>

          </Paper>
        </MuiThemeProvider>


      </div>
    );
  }
};


export default withStyles(styles)(SpashAPIPage);
