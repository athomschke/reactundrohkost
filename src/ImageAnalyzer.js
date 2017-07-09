import React, { Component } from 'react';

export default function ImageMapper(pixelData){

    let length = pixelData.data.length;
    let rgb = {r: 0, g: 0, b: 0};
    let blockSize = 5;
    let i = 0;
    let count = 0;
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += pixelData.data[i];
        rgb.g += pixelData.data[i+1];
        rgb.b += pixelData.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);


    return rgb;
}
