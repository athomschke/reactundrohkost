import React from 'react';

import baseImage from '../react_and_rohkost_assets/images/vegetables2.jpg';
import ImageMapper from './ImageAnalyzer';

const BOX_WIDTH = 512;

class ImageGritter extends React.Component {
	onImageLoad() {
		const baseImageElement = this.refs.baseImage;
		const canvas = this.refs.canvas;
		canvas.width = baseImageElement.width;
		canvas.height = baseImageElement.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(baseImageElement, 0, 0);
		const imageDatas = [];
		for (let i = 0; i <= canvas.width - BOX_WIDTH; i += BOX_WIDTH ) {
			for (let j = 0; j <= canvas.width - BOX_WIDTH; j += BOX_WIDTH ) {
				const imageData = ctx.getImageData(i,j,512,512);
				const iconName = ImageMapper(imageData);
				const url = `../src/react_and_rohkost_assets/icons/png/${iconName}`
				let boxImageElement = document.createElement('img');
				boxImageElement.src=url;
				document.getElementsByClassName('App')[0].appendChild(boxImageElement);
			}
		}
		// imageDatas.forEach((imageData) => {
		// 	const imageCanvas = document.createElement('canvas');
		// 	imageCanvas.width = BOX_WIDTH;
		// 	imageCanvas.height = BOX_WIDTH;
		// 	imageCanvas.getContext('2d').putImageData(imageData, 0,0)
		// 	document.getElementsByClassName('App')[0].appendChild(imageCanvas);

		// })
	}

	render() {
		return (
			<div>
				<canvas ref="canvas" className="baseCanvas" />
				<img ref="baseImage" src={baseImage} className='BaseImage' alt="vegetables2" onLoad={this.onImageLoad.bind(this)}/>
			</ div>
		)
	}
}

export default ImageGritter;