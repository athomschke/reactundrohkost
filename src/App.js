import React, { Component } from 'react';
import baseImage from '../react_and_rohkost_assets/images/vegetables2.jpg';

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
        <img ref="baseImage" src={baseImage} className='BaseImage'/>
        <canvas ref="canvas" />
      </div>
    );
  }
}

export default App;
