import React, { Component } from 'react';

//components
import NavBar from './Components/NavBar/NavBar';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './Components/ThemeChanger/Themes';

class App extends Component {

  render() {
    return (
      
      <div>
        <MuiThemeProvider theme={theme}>
          <NavBar theme={theme}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
