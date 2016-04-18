'use strict';

import {PropTypes} from 'react';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Line extends FabricObject {
	constructor(props, context) {
		super(props, context);
		this.state = {
			object: null,
		};

		this.draw = this.draw.bind(this);

		this.toObject = (propertiesToInclude) => this.state.object &&
			this.state.object.toObject(propertiesToInclude);
		this.calcLinePoints = () => this.state.object &&
			this.state.object.calcLinePoints();
		this.toSVG = (reviver) => this.state.object &&
				this.state.object.toSVG(reviver);
		this.complexity = () => 1;

	}

	draw(canvas) {
		let object;
		if (this.props.element instanceof Object) {
			object = fabric.Line.fromElement(this.props.element, this.props);
		} else if (this.props.object instanceof Object) {
			object = fabric.Line.fromObject(this.props.object);
		} else {
			object = new fabric.Line(this.props);
		}
		super.draw(canvas, object);
	}

}

Circle.fromElement = (element, options) => fabric.Line.fromElement(element, options);
Circle.fromObject = (object) => fabric.Line.fromObject(object);
Circle.attribute = fabric.Line.ATTRIBUTE_NAMES;

Circle.propTypes = Object.assign(FabricObject.propTypes, {
	x1: PropTypes.number,
	y1: PropTypes.number,
	x2: PropTypes.number,
	y2: PropTypes.number,
});

Circle.defaultProps = Object.assign(FabricObject.defaultProps, {
	type: 'line',
	x1: 0,
	y1: 0,
	x2: 0,
	y2: 0,
});
