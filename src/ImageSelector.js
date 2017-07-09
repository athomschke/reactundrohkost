import React, { Component } from 'react';

class ImageSelector extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
                <input value={this.state.imgURLInput} onChange={(val)=>{
                    this.setState({imgURLInput: val.target.value});
                }}/>
                <button  onClick={()=>{
                    this.props.onSubmitUrl(this.state.imgURLInput)
                    }} >{"Load image"}</button>
			</ div>
		);
	}
}

export default ImageSelector;
