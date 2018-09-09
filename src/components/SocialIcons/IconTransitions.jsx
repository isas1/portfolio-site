import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Grid from '@material-ui/core/Grid';
import Transition from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

export default ({ in: inProp }) => {

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          <Grid item className={this.props.classes.icon}>
            <a href="https://github.com/isas1" ><FaGithub /></a>
          </Grid>
        </div>
      )}
    </Transition>
  )

}