import React, { Component } from 'react';

//components
import Inputs from './Inputs.jsx';
import NavBar from './NavBar';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Inputs />
      </div>
    );
  }
}

export default App;
