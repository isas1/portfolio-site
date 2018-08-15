import { endpoint, CLIENT_ID } from './creds';

import React from 'react';

//material-ui
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Search from '@material-ui/icons/Search';

import theme from '../../Components/ThemeChanger/Themes';

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
      loadingState: true
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
        console.log(jsonResponse.results);
        this.setState({
          images: jsonResponse.results
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

          <img src={image.urls.thumb} alt={image.description}  />

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
                  <Search />
                </Grid>
                <Grid item>
                  <TextField
                    type="text"
                    label="Type here"
                    onChange={this.trackQueryValue}
                  />
                  <Button color='primary' onClick={this.search} type='submit'>Go</Button>
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
