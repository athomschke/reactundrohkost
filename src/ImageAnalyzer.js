
import apple from './react_and_rohkost_assets/icons/png/apple.png';
import imageMap from './imageMap';
import * as _ from "lodash";
import * as Thief from "./ColorThief"

export default function ImageMapper(pixelData){

    // let length = pixelData.data.length;
    // let rgb = {r: 0, g: 0, b: 0};
    // let blockSize = 5;
    // let i = 0;
    // let count = 0;
    // while ( i < length ) {
    //     ++count;
    //     rgb.r += pixelData.data[i];
    //     rgb.g += pixelData.data[i+1];
    //     rgb.b += pixelData.data[i+2];
    //     i += blockSize * 4
    // }

    // ~~ used to floor values
    // rgb.r = ~~(rgb.r/count);
    // rgb.g = ~~(rgb.g/count);
    // rgb.b = ~~(rgb.b/count);
        
    let color = test(pixelData);
    return getImageForRGB(color[0], color[1], color[2]);
    
    
}

export function test(pixelData){
    let color = Thief.ColorThief.prototype.getColor(pixelData)
    return color
}

export function getImageForRGB(r,g,b){
    let distances = {};
    let minDistance;
    let minDistanceName;

    _.each(imageMap, (imageRgb, imageName)=>{
        let rDistance = Math.pow(Math.abs(imageRgb.r - r), 2);
        let gDistance = Math.pow(Math.abs(imageRgb.g - g), 2);
        let bDistance = Math.pow(Math.abs(imageRgb.b - b),2);
         let distance = Math.sqrt( rDistance+gDistance+bDistance)
        // let average = (r + g + b) / 3 
        // let distance = (imageRgb.r - average) + (imageRgb.g - average) + (imageRgb.b - average) 
        
        distances[imageName] = distance;
        if(!minDistance || minDistance > distance){
            minDistance = distance;
            minDistanceName = imageName;
        }
    });
    return minDistanceName
    
}