import React, { Component } from 'react';
import baseImage from './react_and_rohkost_assets/images/vegetables2.jpg';

import ImageGritter from './ImageGritter';

import './App.css';
import apple from './react_and_rohkost_assets/icons/png/apple.png';

class App extends Component {
	render() {
		const a = baseImage;
		return (
			<div className="App">
				<ImageGritter />
			</ div>
		);
	}
}

export default App;
