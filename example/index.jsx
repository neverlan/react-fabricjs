'use strict';

import React from 'react';
import {render} from 'react-dom';

import Canvas from 'react-fabricjs/Canvas';
import Circle from 'react-fabricjs/shape/Circle';

class Example extends React.Component {
	render() {
		return (
			<div>
				<Canvas>
					<Circle 
						options={{radius: 20, fill: 'green', left: 100, top: 100}} 
						ref="circle" 
					/>

					<Circle 
						options={{radius: 20, fill: 'green', left: 0, top: 0}} 
						ref="circle" 
					/>
				</Canvas>
			</div>
		);
	}
}

render(
	<Example />,
	document.getElementById('root')
);