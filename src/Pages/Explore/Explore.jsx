import React, { Component } from 'react';
// import './main.js';

const styles = {
  can: {
    border: '1px solid #000000',
    backgroundColor: 'red'
  }
}
export default class Explore extends Component {

  render() {
    return (

      <div>
        <canvas style={styles.can} width="800" height="800">Canvas Here
        </canvas>
        <script src="main.js"></script>

      </div>
    )
  }
}

