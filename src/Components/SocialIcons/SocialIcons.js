import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

import './style.css';

const SocialIcons = (props, context) => {
  //const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/isas1" ><FaGithub /></a>
        {/*<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/flexdinesh" ><i className="fab fa-twitter">Twitter</i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/story/flexdinesh" ><i className="fab fa-stack-overflow">Stack Overflow</i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dineshpandiyan" ><i className="fab fa-linkedin">LinkedIn</i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@flexdinesh" ><i className="fab fa-medium"></i></a>
  <a className="devto" target="_blank" rel="noopener noreferrer" href="https://dev.to/flexdinesh"></a>*/}
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;