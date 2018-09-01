import React, { Component } from 'react';

import ParticleEffectButton from 'react-particle-effect-button'

class ParticlesButton extends Component {

	state = {
    hidden: false
  }

  render () {
    return (
      <ParticleEffectButton
        color='#121019'
        hidden={this.state.hidden}
      >
        BUTTON CONTENT GOES HERE
      </ParticleEffectButton>
    )
  }
};

export default ParticlesButton;
