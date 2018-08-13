import React from 'react';
import { Button, TextField } from '../../../node_modules/@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '../../../node_modules/@material-ui/core';
import './style.css';

const CLIENT_ID = '2f865e7e549eee7c61b5503ce26f540b0687d2fbbae22a4307b9a6d8bdc913f8'
const endpoint = 'https://api.unsplash.com/search/photos'

const styles = theme => ({
  root: {
    flexgrow: 1
  },
  btn: {
    marginLeft: 8
  },
  paper: {
    width: '90%',
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

  search() {
    fetch(`${endpoint}?query=${this.query}&client_id=${CLIENT_ID}`)
      .then(response=>{
        return response.json()
      }).then(jsonResponse=>{
        console.log(jsonResponse.results);
        this.setState({
          images: jsonResponse.results
        })
      })
  }

  trackQueryValue (ev) {
    this.query = ev.target.value;
  }

  images(){
    return this.state.images.map(image=>{
      return <img src={image.urls.thumb} />
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/*Photos in here*/}
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Grid
                container
                alignItems='stretch'
                direction='row'
                justify='center'
              >
                <Paper className={classes.paper}>
                  <TextField type="text" onChange={this.trackQueryValue}/>
                  <Button theme='primary' onClick={this.search}> Search</Button>
                  <div>{this.images()}</div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>


      </div>
    );
  }
};


export default withStyles(styles)(SpashAPIPage);
