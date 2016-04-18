'use strict';

import React from 'react';
import {render} from 'react-dom';
import './style.scss';
// import {fabric} from 'fabric-webpack';

import Canvas from 'react-fabricjs/Canvas';
import Circle from 'react-fabricjs/shape/Circle';
import Path from 'react-fabricjs/shape/Path';
import PathGroup from 'react-fabricjs/shape/PathGroup';
import Image from 'react-fabricjs/Image';
// import Ellipse from 'react-fabricjs/shape/Ellipse';
// import Triangle from 'react-fabricjs/shape/Triangle';

// const image = new Image();
// image.src = "http://fabricjs.com/assets/honey_im_subtle.png";

class Example extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			color: 'blue',
		};
	}

	changeColor() {
		if (this.state.color === 'blue') {
			this.setState({color: 'red'});
		} else {
			this.setState({color: 'blue'});
		}
	}

	setBackgroundImage() {
		// this.refs.canvas.setBackgroundImage(
		// 	'http://fabricjs.com/assets/honey_im_subtle.png',
		// 	this.refs.canvas.renderAll,
		// 	{
		// 		originX: 'left',
		// 		originY: 'top',
		// 		crossOrigin: 'anonymous',
		// 		width: 300,
		// 		height: 300,
		// 	}
		// );

		// Image.fromURL(, (img) => {
		// 	this.refs.canvas.add(img);
		// });

	}

	render() {
		return (
			<div className="main-container">
				<Canvas
					ref="canvas"
					width="1000"
					height="1000"
				>
					<Circle
						ref="circle"
						radius={20}
						fill={this.state.color}
						left={100}
						top={50}
						stroke="green"
					/>

					<Image
						imgElement={document.getElementById('my-image')}
						width={100}
						height={100}
					/>

					<Image
						src="http://i.imgur.com/q4fu6Ki.jpg"
						width={100}
						height={100}
						left={0}
						top={300}
					/>

					<Path
						path="M 0 0 L 300 100 L 200 300 z"
						fill="red"
						stroke="green"
						strokeWidth={10}
						opacity={0.5}
					/>

				</Canvas>

				<button onClick={this.changeColor.bind(this)}>Color</button>
				<button onClick={this.setBackgroundImage.bind(this)}>Image</button>
			</div>
		);
	}
}


render(
	<Example />,
	document.getElementById('root')
);
