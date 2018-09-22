import React, { Component } from 'react';
import './main.js';

export default class Explore extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <canvas id="draw" width="800" height="800">
      </canvas>
    )
  }
}

