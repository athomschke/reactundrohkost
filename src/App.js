import React, { Component } from 'react';

import ImageGritter from './ImageGritter';

import './App.css';
import ImageScale from './ImageScale';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ImageScale />
				<ImageGritter />
			</ div>
		);
	}
}

export default App;
