import React, { Component } from 'react';
import baseImage from './react_and_rohkost_assets/images/vegetables2.jpg';

import './App.css';

class App extends Component {
	onImageLoad() {
		const baseImageElement = this.refs.baseImage;
		const canvas = this.refs.canvas;
		canvas.width = baseImageElement.width;
		canvas.height = baseImageElement.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(baseImageElement, 0, 0);
	}

	render() {
		return (
			<div className="App">
				<canvas ref="canvas" className="baseCanvas"/>
				<img ref="baseImage" src={baseImage} className='BaseImage' alt="vegetables2" onLoad={this.onImageLoad.bind(this)}/>
			</div>
		);
	}
}

export default App;
