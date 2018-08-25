import React, { Component } from 'react';

//components
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

import theme from './Components/ThemeChanger/Themes';

import { MuiThemeProvider } from 'material-ui/styles';

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
