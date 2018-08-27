import Typist from 'react-typist';
import React, { Component } from 'react';

//required for blinking cursor
import 'react-typist/dist/Typist.css';

class Typer extends Component {
  constructor(props) {
    super(props);
    this.state = { delay: 0 }
  }
  render() {
    return (
      <Typist startDelay={1000} avgTypingDelay={120} delay={10000} cursor={{ hideWhenDone: true }}>
        <span>Student...</span>
          <Typist.Backspace count={10} delay={2000} />
        <span>Teacher...</span>
        <Typist.Backspace count={10} delay={1000} avgTypingDelay={10} />
        <span>Front End Developer.</span>
      </Typist>);
  }
}

export default Typer;
