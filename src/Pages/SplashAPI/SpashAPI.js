import React, { Fragment } from 'react';

//material-ui
import { withStyles } from '../../../node_modules/@material-ui/core';
import { Button, TextField, Input } from '../../../node_modules/@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Search from '@material-ui/icons/Search';

const CLIENT_ID = '2f865e7e549eee7c61b5503ce26f540b0687d2fbbae22a4307b9a6d8bdc913f8'
const endpoint = 'https://api.unsplash.com/search/photos'

const styles = theme => ({
  root: {
    flexgrow: 1,
    marginTop: 20
  },
  btn: {
    marginLeft: 8
  },
  image: {
    padding: theme.spacing.unit * 2
  },
  paperBg: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  search: {
    padding: 10
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

        <Paper className={classes.paperBg}>
          <Grid container spacing={24} justify='center' alignItems='center'>
            <h2>Photo finder</h2>
            <Grid container className={classes.search} xs={12}>
              <Input
                type="text"
                onChange={this.trackQueryValue}
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
              <Button className={classes.btn} theme='secondary' onClick={this.search}>Go</Button>
            </Grid>
            <Grid container spacing={16} justify='space-evenly'>
              {this.images()}
            </Grid>

          </Grid>
        </Paper>



      </div>
    );
  }
};


export default withStyles(styles)(SpashAPIPage);
