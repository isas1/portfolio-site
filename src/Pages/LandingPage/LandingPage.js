import React from 'react';
import PropTypes from 'prop-types';
//import SocialIcons from '@components/SocialIcons';
//import Nav from '@components/Nav';
//import ScrollToNext from '@components/ScrollToNext';
//import BrowserNotes from '@components/BrowserNotes';

import './style.css';

const LandingPage = (props, context) => {

  const bgPrimary = '#FFFFFF'
  const colorPrimary = '333333'
  
  //const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      {/*<Nav />*/}
      <main style={{ color: colorPrimary }}>
        {/*<BrowserNotes />*/}
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Sam!</div>
          <div className="tagline">
            Full Stack Dev | Tech Enthusiast | Teacher 
          </div>
          {/*<SocialIcons />*/}
        </div>
      </main>
      {/*<ScrollToNext pageSelector=".about-page" />*/}
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
