import React from 'react';

//material-ui
import { Button, Input, TextField } from '../../../node_modules/@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Search from '@material-ui/icons/Search';

import purple from '@material-ui/core/colors/purple';

const CLIENT_ID = '2f865e7e549eee7c61b5503ce26f540b0687d2fbbae22a4307b9a6d8bdc913f8'
const endpoint = 'https://api.unsplash.com/search/photos'

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

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

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

  search() {
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
      return <Grid item>
        <Paper className={this.props.image}>

          <img src={image.urls.thumb} alt={image.description} key={image.id} />

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
                <Button color='primary' onClick={this.search}>Go</Button>
              </Grid>
            </Grid>

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
