import React, { Component } from 'react';

class ImageSelector extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
                <input className="ImageUrlInput" placeholder="Enter an image URL" value={this.state.imgURLInput} onChange={(val)=>{
                    this.setState({imgURLInput: val.target.value});
                }}/>
                <button className="RohkostifyButton" onClick={()=>{
                    this.props.onSubmitUrl(this.state.imgURLInput)
                    }} >Rohkostify!</button>
			</ div>
		);
	}
}

export default ImageSelector;
