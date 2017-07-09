import React, { Component } from 'react';
import baseImage from './react_and_rohkost_assets/images/vegetables2.jpg';

import './App.css';
import ImageMapper from './ImageAnalyzer';
import apple from './react_and_rohkost_assets/icons/png/apple.png';

class App extends Component {
	onImageLoad() {
		const baseImageElement = this.refs.baseImage;
		const canvas = this.refs.canvas;
		canvas.width = baseImageElement.width;
		canvas.height = baseImageElement.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(baseImageElement, 0, 0);

		var test = ctx.getImageData(0, 0, 512, 512)
		console.log("closest image", ImageMapper(test))
	}

	render() {
		return (
			<div className="App">
				<canvas ref="canvas" className="baseCanvas" />
				<img ref="baseImage" src={baseImage} className='BaseImage' alt="vegetables2" onLoad={this.onImageLoad.bind(this)} />

			</div>
		);
	}
}

export default App;
