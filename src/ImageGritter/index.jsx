import React from 'react';

import baseImage from '../react_and_rohkost_assets/images/nexenio_board.jpg';

import Box from '../Box';

import { boxSize } from '../constants';
const PIXEL_PER_BOX_SIDE = Math.floor(boxSize);

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
		for (let y = 0; y <= canvas.height - PIXEL_PER_BOX_SIDE; y += PIXEL_PER_BOX_SIDE ) {
			const row = [];
			for (let x = 0; x <= canvas.width - PIXEL_PER_BOX_SIDE; x += PIXEL_PER_BOX_SIDE ) {
				const imageData = ctx.getImageData(x,y,PIXEL_PER_BOX_SIDE,PIXEL_PER_BOX_SIDE);
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
		return row.map((box, y) => {
			return <Box key={y} data={box} mySize={PIXEL_PER_BOX_SIDE}/>
		})
	}

	renderBoxes() {
		return this.state.boxImageDatas.map((row, x) => {
			return (<div className='Row' key={x}>{this.renderRow(row)}</div>)
		})
	}

	renderPlaceholder(url) {
		if(url){
			return (<div>
				<canvas ref='canvas' className="baseCanvas" />
				<img ref="baseImage" src={url} className='BaseImage' alt="vegetables2" onLoad={this.onImageLoad.bind(this)}/>
			</div>)
		}
	}

	render() {
		return (
			<div>
				{(this.state.boxImageDatas.length > 0) ? this.renderBoxes() : this.renderPlaceholder(this.props.imgURL)}
			</ div>
		)
	}
}

export default ImageGritter;