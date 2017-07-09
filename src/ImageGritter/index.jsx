import React from 'react';

import baseImage from '../react_and_rohkost_assets/images/vegetables2.jpg';

import Box from '../Box';

const BOX_SIZE = 512/4;

class ImageGritter extends React.Component {
	constructor() {
		super();
		this.state = {
			boxImageDatas: []
		}
	}

	initCanvas() {
		const baseImageElement = this.refs.baseImage;
		const canvas = this.refs.canvas;
		canvas.width = baseImageElement.width;
		canvas.height = baseImageElement.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(baseImageElement, 0, 0);
	}

	getGrid() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		const imageDatas = [];
		for (let x = 0; x <= canvas.height - BOX_SIZE; x += BOX_SIZE ) {
			const row = [];
			for (let y = 0; y <= canvas.width - BOX_SIZE; y += BOX_SIZE ) {
				const imageData = ctx.getImageData(y,x,512,512);
				row.push(imageData);
			}
			imageDatas.push(row);
		}
		return imageDatas;
	}

	onImageLoad() {
		this.initCanvas();
		this.setState({
			boxImageDatas: this.getGrid()
		});
		this.refs.canvas.parentElement.removeChild(this.refs.canvas);
	}

	renderRow(row) {
		return row.map((box, x) => {
			return <Box key={x} data={box}/>
		})
	}

	renderBoxes() {
		return this.state.boxImageDatas.map((row, y) => {
			return (<div key={y}>{this.renderRow(row)}</div>)
		})
	}

	render() {
		return (
			<div>
				<canvas ref='canvas' className="baseCanvas" />
				<img ref="baseImage" src={baseImage} className='BaseImage' alt="vegetables2" onLoad={this.onImageLoad.bind(this)}/>
				<div>{this.renderBoxes()}</div>
			</ div>
		)
	}
}

export default ImageGritter;