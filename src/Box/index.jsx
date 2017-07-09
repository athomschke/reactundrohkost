import React from 'react';

import apple from '../react_and_rohkost_assets/icons/png/apple.png';
import aubergine from '../react_and_rohkost_assets/icons/png/aubergine.png';
import avocado from '../react_and_rohkost_assets/icons/png/avocado.png';
import banana from '../react_and_rohkost_assets/icons/png/banana.png';
import beetroot from '../react_and_rohkost_assets/icons/png/beetroot.png';
import bellPepper1 from '../react_and_rohkost_assets/icons/png/bell-pepper-1.png';
import bellPepper from '../react_and_rohkost_assets/icons/png/bell-pepper.png';
import broccoli from '../react_and_rohkost_assets/icons/png/broccoli.png';
import carrot from '../react_and_rohkost_assets/icons/png/carrot.png';
import cherry from '../react_and_rohkost_assets/icons/png/cherry.png';
import chili from '../react_and_rohkost_assets/icons/png/chili.png';
import corn from '../react_and_rohkost_assets/icons/png/corn.png';
import cucumber from '../react_and_rohkost_assets/icons/png/cucumber.png';
import grape from '../react_and_rohkost_assets/icons/png/grape.png';
import lemon from '../react_and_rohkost_assets/icons/png/lemon.png';
import mushroom from '../react_and_rohkost_assets/icons/png/mushroom.png';
import orange from '../react_and_rohkost_assets/icons/png/orange.png';
import pear from '../react_and_rohkost_assets/icons/png/pear.png';
import pineapple from '../react_and_rohkost_assets/icons/png/pineapple.png';
import potato from '../react_and_rohkost_assets/icons/png/potato.png';
import pumpkin from '../react_and_rohkost_assets/icons/png/pumpkin.png';
import strawberry from '../react_and_rohkost_assets/icons/png/strawberry.png';
import tomato from '../react_and_rohkost_assets/icons/png/tomato.png';
import watermelon from '../react_and_rohkost_assets/icons/png/watermelon.png';

import ImageMapper from '../ImageAnalyzer';

const imageUrlForName = (name) => {
	switch(name) {
		case 'apple': return apple;
		case 'aubergine': return aubergine;
		case 'avocado': return avocado;
		case 'banana': return banana;
		case 'beetroot': return beetroot;
		case 'bell-pepper-1': return bellPepper1;
		case 'bell-pepper': return bellPepper;
		case 'broccoli': return broccoli;
		case 'carrot': return carrot;
		case 'cherry': return cherry;
		case 'chili': return chili;
		case 'corn': return corn;
		case 'cucumber': return cucumber;
		case 'grape': return grape;
		case 'lemon': return lemon;
		case 'mushroom': return mushroom;
		case 'orange': return orange;
		case 'pear': return pear;
		case 'pineapple': return pineapple;
		case 'potato': return potato;
		case 'pumpkin': return pumpkin;
		case 'strawberry': return strawberry;
		case 'tomato': return tomato;
		case 'watermelon': return watermelon;
	}
}

export default class Box extends React.Component {
	render() {
		const imageData = this.props.data;

		if (imageData === '') return <div />;

		const iconName = ImageMapper(imageData);
		let boxImageElement = document.createElement('img');
		boxImageElement.src=imageUrlForName(iconName);
		return <img src={imageUrlForName(iconName)} />
	}
}