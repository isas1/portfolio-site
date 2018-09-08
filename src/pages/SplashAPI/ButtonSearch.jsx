import React from 'react';

import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core'
import Search from '@material-ui/icons/Search';
import ParticleEffectButton from 'react-particle-effect-button';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  inputs: {
    paddingBottom: theme.spacing.unit * 3
  }
})

const ButtonSearch = () => {

  const { classes } = this.props;

  return (

    <form onSubmit={this.props.search}>
      <Grid container justify='center' alignItems='flex-end' className={classes.inputs} spacing={8}>
        <Grid item>
          <ParticleEffectButton color='#121019' hidden={this.props.hidden}>
            <Search />
          </ParticleEffectButton>
        </Grid>
        <Grid item>
          <ParticleEffectButton color='#121019' hidden={this.props.hidden}>
            <TextField
              type="text"
              label="Type here"
              onChange={this.props.trackQueryValue}
            />
            {/* Search function prop passed down from SplashAPI parent */}
            <Button color='primary' onClick={this.props.search} type='submit'>Go</Button>

          </ParticleEffectButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default withStyles(styles)(ButtonSearch);
