'use strict';

import {PropTypes} from 'react';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Triangle extends FabricObject {
	constructor(props, context) {
		super(props, context);
		this.state = {
			object: null,
		};

		this.draw = this.draw.bind(this);

		this.toSVG = (reviver) => this.state.object &&
			this.state.object.toSVG(reviver);

		this.complexity = () => 1;
	}

	draw() {
		const object = new fabric.Triangle(this.props);
		this.setState({object});

		return object;
	}
}

Triangle.fromObject = (object) => fabric.Triangle.fromObject(object);

Triangle.propTypes = FabricObject.propTypes;
Triangle.defaultProps = Object.assign(FabricObject.defaultProps, {
	type: 'triangle',
});
