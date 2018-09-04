import React from 'react';

import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core'
import Search from '@material-ui/icons/Search';
import ParticleEffectButton from 'react-particle-effect-button';

const ButtonSearch = (props) => {

  return (
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
  );
}

export default ButtonSearch;