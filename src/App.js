import React, { Component } from 'react';

import ImageGritter from './ImageGritter';
import ImageSelector from './ImageSelector';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<ImageSelector onSubmitUrl={(url)=>{
					this.setState({imgUrl:url })}}/>
				<ImageGritter imgURL={this.state.imgUrl} />
			</ div>
		);
	}
}

export default App;
