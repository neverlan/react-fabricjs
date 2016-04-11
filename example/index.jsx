'use strict';

import React from 'react';
import {render} from 'react-dom';
import {fabric} from 'fabric-webpack';

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
		// this.refs.circle.set('fill', 'red')
		// console.log(this.refs.canvas.getChild(0));
		// this.refs.canvas.getChild(0).set('fill', 'red');
	}

	render() {
		// console.log(this.state.color);
		return (
			<div>
				<Canvas ref="canvas">
					<Circle
						ref="circle"
						radius={20}
						fill={this.state.color}
						left={100}
						top={100}
					/>
				</Canvas>

				<button onClick={this.changeColor.bind(this)}>Color</button>
			</div>
		);
	}
}

render(
	<Example />,
	document.getElementById('root')
);
