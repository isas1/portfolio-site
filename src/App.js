import React, { Component } from 'react';

//components
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

import theme from '@theme';

import { MuiThemeProvider } from 'material-ui/styles';

// For the sticky footer
const contentStyle = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
}

class App extends Component {

  render() {
    return (
      
      <div>
        <MuiThemeProvider theme={theme}>
          <div style={contentStyle} >
            <NavBar theme={theme}/>
            <Footer />
          </div>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
