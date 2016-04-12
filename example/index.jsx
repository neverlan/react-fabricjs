'use strict';

import React from 'react';
import {render} from 'react-dom';
import './style.scss';
// import {fabric} from 'fabric-webpack';

import Canvas from 'react-fabricjs/Canvas';
import Circle from 'react-fabricjs/shape/Circle';
// import Ellipse from 'react-fabricjs/shape/Ellipse';
// import Triangle from 'react-fabricjs/shape/Triangle';

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

		// const circle = this.refs.canvas.getChild('circle');
		// circle.set('fill', 'red')
	}

	setBackgroundImage() {
		this.refs.canvas.setBackgroundImage(
			'http://fabricjs.com/assets/honey_im_subtle.png',
			this.refs.canvas.renderAll,
			{
				originX: 'left',
				originY: 'top',
				crossOrigin: 'anonymous',
				width: 300,
				height: 300,
			}
		);
	}

	render() {
		return (
			<div className="main-container">
				<Canvas ref="canvas" width="5000" height="5000" >
					<Circle
						ref="circle"
						radius={20}
						fill={this.state.color}
						left={100}
						top={100}
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
