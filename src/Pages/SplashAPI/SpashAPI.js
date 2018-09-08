import React from 'react';
import { endpoint, CLIENT_ID } from './creds';

import { Button, TextField } from '@material-ui/core';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Search from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

import ParticleEffectButton from 'react-particle-effect-button';
import theme from '@theme';

const styles = theme => ({
  root: {
    flexgrow: 1
  },
  image: {
    padding: theme.spacing.unit * 2,
    maxHeight: 300,
    maxWidth: 300,
    borderRadius: 20
  },
  inputs: {
    paddingBottom: theme.spacing.unit * 3
  },
  paperBg: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  imagePaper: {
    padding: 10
  }
})

class SpashAPIPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loadingState: false,
      hidden: false
    };

    this.query = '';
    this.trackQueryValue = this.trackQueryValue.bind(this);
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();

    this.setState({
      loadingState: true
    });

    fetch(`${endpoint}?query=${this.query}&client_id=${CLIENT_ID}`)
      .then(response => {
        return response.json()
      }).then(jsonResponse => {
        console.log(jsonResponse.results);
          this.setState({
            images: jsonResponse.results,
            hidden: true,
            loadingState: false
          })
      }).catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }

  trackQueryValue(ev) {
    this.query = ev.target.value;
  }

  images() {
    return this.state.images.map(image => {
      return <Grid item key={image.id}>
        <Paper className={this.props.classes.imagePaper}>

          <img className={this.props.classes.image} src={image.urls.thumb} alt={image.description} />
          <Typography color='primary'>{image.likes} likes  </Typography>
          <Typography color='secondary'>Snapped by: {image.user.first_name}</Typography>

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
          <Grow in={true}>
            <Paper className={classes.paperBg}>
              <Grid container spacing={24}>


                <Grid item>
                  <h2>Photo finder</h2>
                </Grid>
                
                <Grid item>

                {/* 
                Remove and place in a Search Component
                      Dependancies: 
                      - Search function
                      - this.state.loading, images and hidden
                      - Enpoint and CLIENT_ID
                */}

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
                          />

                          <Button color='primary' onClick={this.search} type='submit'>Go</Button>

                        </ParticleEffectButton>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>

              </Grid>





              {/* Output container for images */}
              <Grid container spacing={16} justify='space-evenly'>
              
              {/* Create display images component -- catch no items with a conditional */ }
              {this.state.loadingState
                    ? <p>Loading</p>
                    : this.images()
                    }
                
              </Grid>

            </Paper>
          </Grow>
        </MuiThemeProvider>


      </div>
    );
  }
};


export default withStyles(styles)(SpashAPIPage);
