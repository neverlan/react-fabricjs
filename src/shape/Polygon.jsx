'use strict';

import {PropTypes} from 'react';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Polygon extends FabricObject {
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
		this.commonRender = () => this.state.object &&
			this.state.object.commonRender();

		this.complexity = () => this.props.points ? this.props.points.length : 0;

	}

	draw(cb) {
		let object;
		if (this.props.element instanceof Object) {
			object = fabric.Polygon.fromElement(this.props.element, this.props);
		} else if (this.props.object instanceof Object) {
			object = fabric.Polygon.fromObject(this.props.object);
		} else {
			object = new fabric.Polygon(this.props);
		}
		super.draw(object, cb);
	}
}

Polygon.fromElement = (element, options) => fabric.Polygon.fromElement(element, options);
Polygon.fromObject = (object) => fabric.Polygon.fromObject(object);
Polygon.attribute = fabric.Polygon.ATTRIBUTE_NAMES;

Polygon.propTypes = Object.assign(FabricObject.propTypes, {
	points: PropTypes.array,
	minX: PropTypes.number,
	minY: PropTypes.number,
});

Polygon.defaultProps = Object.assign(FabricObject.defaultProps, {
	type: 'polygon',
	points: null,
	minX: 0,
	minY: 0,
});
