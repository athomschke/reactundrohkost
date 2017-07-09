import React, { Component } from 'react';
import baseImage from './react_and_rohkost_assets/images/vegetables2.jpg';

import ImageGritter from './ImageGritter';

import './App.css';
import ImageMapper from './ImageAnalyzer';
import apple from './react_and_rohkost_assets/icons/png/apple.png';

class App extends Component {

	render() {
		return (
			<div className="App">
				<ImageGritter />
			</div>
		);
	}
}

export default App;
