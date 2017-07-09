import * as React from "react";
import { HuePicker } from 'react-color';
import {getImageForRGB} from "./ImageAnalyzer";

export default class Component extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <HuePicker color={this.state.color} onChange={(color) => {
                this.setState({
                    image: getImageForRGB(color.rgb.r, color.rgb.g, color.rgb.b) ,
                    color: color
                    })
            }} />
            <img width={50} height={50} src={this.state.image}/>
        </div>;
    }
}