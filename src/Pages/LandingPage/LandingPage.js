import React from 'react';
import PropTypes from 'prop-types';
import SplitText from 'react-pose-text';
//import SocialIcons from '@components/SocialIcons';
//import Nav from '@components/Nav';
//import ScrollToNext from '@components/ScrollToNext';
//import BrowserNotes from '@components/BrowserNotes';

import './style.css';

const LandingPage = (props, context) => {

  const bgPrimary = '#FFFFFF';
  const colorPrimary = '333333';

  const charPoses = {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  };

  //const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      {/*<Nav />*/}
      <main style={{ color: colorPrimary }}>
        {/*<BrowserNotes />*/}
        <div className="intro-wrapper">
           <div className="intro-name"><SplitText charPoses={charPoses}>Hello, I'm Sam!</SplitText></div>
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
