'use strict';

import {PropTypes} from 'react';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Path extends FabricObject {
	constructor(props, context) {
		super(props, context);
		this.state = {
			object: null,
		};

		this.draw = this.draw.bind(this);

		this.toString = () => this.state.object &&
			this.state.object.toString();
		this.toObject = (propertiesToInclude) => this.state.object &&
			this.state.object.toObject(propertiesToInclude);
		this.toDatalessObject = (propertiesToInclude) =>
			this.state.object.toDatalessObject(propertiesToInclude);
		this.toSVG = (reviver) => this.state.object &&
			this.state.object.toSVG(reviver);
		this.complexity = () => this.state.object &&
			this.state.object.complexity();
	}

	draw(cb) {
		if (this.props.element instanceof Object) {
			fabric.Path.fromElement(
				this.props.element,
				(instance) => super.draw(instance, cb),
				this.props
			);
		} else if (this.props.object instanceof Object) {
			fabric.Path.fromObject(
				this.props.object,
				(instance) => super.draw(instance, cb)
			);
		} else {
			const object = new fabric.Path(this.props.path, this.props);
			super.draw(object, cb);

			return object;
		}
	}

}

Path.fromElement = (element, callback, options) => fabric.Path.fromElement(element, callback, options);
Path.fromObject = (object, callback) => fabric.Path.fromObject(object, callback);
Path.attribute = fabric.Path.ATTRIBUTE_NAMES;

Path.propTypes = Object.assign(FabricObject.propTypes, {
	path: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	minX: PropTypes.number,
	minY: PropTypes.number,
});

Path.defaultProps = Object.assign(FabricObject.defaultProps, {
	type: 'path',
	path: null,
	minX: 0,
	minY: 0,
});
