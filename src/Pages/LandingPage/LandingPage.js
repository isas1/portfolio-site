import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '../../Components/SocialIcons';
//import Nav from '@components/Nav';
//import ScrollToNext from '@components/ScrollToNext';
//import BrowserNotes from '@components/BrowserNotes';

import './style.css';


class LandingPage extends React.Component {

  state = {
    hovered: false,
    boxColour: '0px 3px 0px 0px rgba(188, 188, 188, 0.2)'
  }


  handleMouseEnterHandler = () => {
    this.setState({
      hovered: true
    })
    //alert(this.state.hovered);
  }

  handleMouseLeaveHandler = () => {
    this.setState({
      hovered: true
    })
    //alert(this.state.hovered);
  }

  render() {
    return (
      <div style={{ backgroundColor: '#FFFFFF' }} className="landing-page">
        {/*<Nav />*/}
        <main style={{ color: '333333' }}>
          {/*<BrowserNotes />*/}
          <div className="intro-wrapper">
             <div className="intro-name" style={{ boxShadow: !this.state.hovered ?  null : this.state.boxColour }} onMouseEnter={ this.handleMouseEnterHandler } onMouseLeave={ this.handleMouseLeaveHandler }>Hello, I'm Sam!</div>
            <div className="tagline">
              Full Stack Dev | Tech Enthusiast | Teacher
            </div>
            <SocialIcons />
          </div>
        </main>
        {/*<ScrollToNext pageSelector=".about-page" />*/}
      </div>
    );
  };
  }
  

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
