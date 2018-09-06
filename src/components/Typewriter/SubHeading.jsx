import React from 'react';
import Typist from 'react-typist';

//required for blinking cursor
import 'react-typist/dist/Typist.css';

const SubHeading = () => {
  
    return (
      <Typist startDelay={1000} avgTypingDelay={120} delay={10000} cursor={{ hideWhenDone: true }}>
        <span>Student...</span>
          <Typist.Backspace count={10} delay={2000} />
        <span>Teacher...</span>
        <Typist.Backspace count={10} delay={1000} avgTypingDelay={10} />
        <span>Front End Developer.</span>
      </Typist>);
  }


export default SubHeading;
