import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImgList from '../../Components/ImgList/ImgList';
import { Button, Input } from '../../../node_modules/@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '../../../node_modules/@material-ui/core';
import './style.css';

const styles = theme => ({
  root: {
    flexgrow: 1
  },
  heading: {
    width: '90%',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  }
})
class SpashAPIPage extends React.Component {

  constructor() {
    super();
    this.state = {
      imgs: []
    };
  }

  componentDidMount() {
    const APP_ID = '2f865e7e549eee7c61b5503ce26f540b0687d2fbbae22a4307b9a6d8bdc913f8'

    fetch('https://api.unsplash.com/photos/?client_id=' + APP_ID)
      .then(res => res.json())
      .then(data => {
        this.setState({ imgs: data });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
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
                <Paper className={classes.heading}>
                  <Input placeholder="What would you like to see?" />
                  <Button>Search</Button>
                </Paper>
              </Grid>
              <ImgList data={this.state.imgs} />
            </Grid>
          </Grid>
        </div>


      </div>
    );
  }
};


export default withStyles(styles)(SpashAPIPage);
