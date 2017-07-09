import React, { Component } from 'react';

import ImageGritter from './ImageGritter'
import './App.css';

class App extends Component {
  componentDidMount() {
    var canvas = this.refs.canvas;
    var ctx = canvas.getContext('2d');
    ctx.rect(10, 10, 100, 100);
    ctx.fillStyle="#FF0000";
    ctx.fill();
    var test = ctx.getImageData(50, 50, 100, 100)
    debugger;

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <canvas ref="canvas" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
