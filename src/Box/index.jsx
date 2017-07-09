import React from 'react';
import ReactSVG from 'react-svg'

import apple from '../react_and_rohkost_assets/icons/svg/apple.svg';
import aubergine from '../react_and_rohkost_assets/icons/svg/aubergine.svg';
import avocado from '../react_and_rohkost_assets/icons/svg/avocado.svg';
import banana from '../react_and_rohkost_assets/icons/svg/banana.svg';
import beetroot from '../react_and_rohkost_assets/icons/svg/beetroot.svg';
import bellPepper1 from '../react_and_rohkost_assets/icons/svg/bell-pepper-1.svg';
import bellPepper from '../react_and_rohkost_assets/icons/svg/bell-pepper.svg';
import broccoli from '../react_and_rohkost_assets/icons/svg/broccoli.svg';
import carrot from '../react_and_rohkost_assets/icons/svg/carrot.svg';
import cherry from '../react_and_rohkost_assets/icons/svg/cherry.svg';
import chili from '../react_and_rohkost_assets/icons/svg/chili.svg';
import corn from '../react_and_rohkost_assets/icons/svg/corn.svg';
import cucumber from '../react_and_rohkost_assets/icons/svg/cucumber.svg';
import grape from '../react_and_rohkost_assets/icons/svg/grape.svg';
import lemon from '../react_and_rohkost_assets/icons/svg/lemon.svg';
import mushroom from '../react_and_rohkost_assets/icons/svg/mushroom.svg';
import orange from '../react_and_rohkost_assets/icons/svg/orange.svg';
import pear from '../react_and_rohkost_assets/icons/svg/pear.svg';
import pineapple from '../react_and_rohkost_assets/icons/svg/pineapple.svg';
import potato from '../react_and_rohkost_assets/icons/svg/potato.svg';
import pumpkin from '../react_and_rohkost_assets/icons/svg/pumpkin.svg';
import strawberry from '../react_and_rohkost_assets/icons/svg/strawberry.svg';
import tomato from '../react_and_rohkost_assets/icons/svg/tomato.svg';
import watermelon from '../react_and_rohkost_assets/icons/svg/watermelon.svg';

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
		return <img src={imageUrlForName(iconName)} width={'10px'} height={'10px'}/>
	}
}