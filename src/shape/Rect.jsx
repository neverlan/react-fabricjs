'use strict';

import {PropTypes} from 'react';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Rect extends FabricObject {
	constructor(props, context) {
		super(props, context);
		this.state = {
			object: null,
		};

		this.draw = this.draw.bind(this);

		this.toObject = (propertiesToInclude) => this.state.object &&
			this.state.object.toObject(propertiesToInclude);
		this.toSVG = (reviver) => this.state.object &&
			this.state.object.toSVG(reviver);

		this.complexity = () => 1;
	}

	draw() {
		const object = new fabric.Rect(this.props);
		this.setState({object});

		return object;
	}
}

Rect.fromElement = (element, options) => fabric.Rect.fromElement(element, options);
Rect.fromObject = (object) => fabric.Rect.fromObject(object);
Rect.attribute = fabric.Rect.ATTRIBUTE_NAMES;

Rect.propTypes = Object.assign(FabricObject.propTypes, {
	rx: PropTypes.number,
	ry: PropTypes.number,
});

Rect.defaultProps = Object.assign(FabricObject.defaultProps, {
	type: 'rect',
	rx: 0,
	ry: 0,
	strokeDashArray: null,
});
