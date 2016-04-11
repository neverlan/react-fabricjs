'use strict';

import React from 'react';
import {render} from 'react-dom';
import {fabric} from 'fabric-webpack';

import Canvas from 'react-fabricjs/Canvas';
import Circle from 'react-fabricjs/shape/Circle';
import Ellipse from 'react-fabricjs/shape/Ellipse';

class Example extends React.Component {

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
				<Ellipse
					top={0}
					left={20}
					rx={10}
					ry={30}
					fill="red"
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
