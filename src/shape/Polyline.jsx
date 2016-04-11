'use strict';

import {PropTypes} from 'react';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Polyline extends FabricObject {
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

		this.complexity = () => this.props.points ? this.props.points.length : 0;
	}

	draw() {
		const object = new fabric.Polyline(this.props);
		this.setState({object});

		return object;
	}
}

Polyline.fromElement = (element, options) => fabric.Polyline.fromElement(element, options);
Polyline.fromObject = (object) => fabric.Polyline.fromObject(object);
Polyline.attribute = fabric.Polyline.ATTRIBUTE_NAMES;

Polyline.propTypes = Object.assign(FabricObject.propTypes, {
	points: PropTypes.array,
	minX: PropTypes.number,
	minY: PropTypes.number,
});

Polyline.defaultProps = Object.assign(FabricObject.defaultProps, {
	type: 'polyline',
	points: null,
	minX: 0,
	minY: 0,
});
