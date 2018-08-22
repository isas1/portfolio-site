import React from 'react';
import PropTypes from 'prop-types';

import { FaGithub } from 'react-icons/fa';
import { FaSpaceShuttle } from 'react-icons/fa';
import { IconContext } from "react-icons";

const iconStyle = {
  size: '3em',
  border: '5px solid pink'
};

const SocialIcons = () => {
  
  return (
    <IconContext.Provider value={{ style: {iconStyle}}}>
        <a href="https://github.com/isas1" ><FaGithub /></a>
        <a href="https://isas1.github.io" ><FaSpaceShuttle /></a>
        {/*
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/story/flexdinesh" ><i className="fab fa-stack-overflow">Stack Overflow</i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dineshpandiyan" ><i className="fab fa-linkedin">LinkedIn</i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@flexdinesh" ><i className="fab fa-medium"></i></a>
        <a className="devto" target="_blank" rel="noopener noreferrer" href="https://dev.to/flexdinesh"></a>
        */}
      </IconContext.Provider>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
