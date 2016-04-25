'use strict';

import React, {PropTypes} from 'react';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric-webpack';
const PI = Math.PI;

export default class Circle extends FabricObject {
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
		this.getRadiusX = () => this.state.object &&
			this.state.object.getRadiusX();
		this.getRadiusY = () => this.state.object &&
			this.state.object.getRadiusY();
		this.setRadius = (value) => this.state.object &&
			this.state.object.setRadius(value);
		this.renderf = (ctx, noTransform) => this.state.object &&
			this.state.object.render(ctx, noTransform);
		this.complexity = () => 1;
	}

	draw(cb) {
		let object;
		if (this.props.element instanceof Object) {
			object = fabric.Circle.fromElement(this.props.element, this.props);
		} else if (this.props.object instanceof Object) {
			object = fabric.Circle.fromObject(this.props.object);
		} else {
			object = new fabric.Circle(this.props);
		}

		super.draw(object, cb);
	}

	render() {
		return <div />;
	}

}

Circle.fromElement = (element, options) => fabric.Circle.fromElement(element, options);
Circle.fromObject = (object) => fabric.Circle.fromObject(object);
Circle.attribute = fabric.Circle.ATTRIBUTE_NAMES;

Circle.propTypes = Object.assign(FabricObject.propTypes, {
	endAngle: PropTypes.number,
	radius: PropTypes.number,
	startAngle: PropTypes.number,
});

Circle.defaultProps = Object.assign(FabricObject.defaultProps, {
	endAngle: 2 * PI,
	radius: 0,
	startAngle: 0,
	type: 'circle',
});
