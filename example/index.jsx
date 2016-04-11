'use strict';

import React from 'react';
import {render} from 'react-dom';
import {fabric} from 'fabric-webpack';

import Canvas from 'react-fabricjs/Canvas';
import Circle from 'react-fabricjs/shape/Circle';

class Example extends React.Component {

	componentDidMount() {
		console.log(new fabric.Circle({radius: 20, fill: 'green', left: 100, top: 100}))
	}

	render() {
		return (
			<div>
				<Canvas>
					<Circle
						radius={20}
						fill="green"
						left={100}
						top={100}
						ref="circle"
					/>
				{/*
					<Circle
						radius={20}
						fill="green"
						left={0}
						top={0}
					/>
				*/}
				</Canvas>
			</div>
		);
	}
}

render(
	<Example />,
	document.getElementById('root')
);
