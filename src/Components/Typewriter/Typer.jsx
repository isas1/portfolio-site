import Typist from 'react-typist';
import React, {Component} from 'react';

class Typer extends Component {
  constructor(props) {
    super(props);
    this.state = { delay: 0 }
  }
  render() { 
    return ( 
    <Typist startDelay={1000} avgTypingDelay={120} delay={10000} cursor={{blink:true, hideWhenDone:true, hideWhenDoneDelay: 100}}>
      <span>Student...</span>
      <Typist.Backspace count={10} delay={2000} />
      <span>Teacher...</span>
      <Typist.Backspace count={10} delay={1000} />
      <span>Front End Devoloper</span>
    </Typist> );
  }
}
 
export default Typer;
