import React, { Component } from 'react';

//components
import Inputs from './Inputs.jsx';
import NavBar from './NavBar';
import { BrowserRouter as Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
