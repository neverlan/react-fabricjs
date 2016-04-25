'use strict';

import {PropTypes} from 'react';
import Path from './Path';
import {fabric} from 'fabric-webpack';

export default class PathGroup extends Path {
	constructor(props, context) {
		super(props, context);
		this.state = {
			object: null,
		};

		this.draw = this.draw.bind(this);

		this.parseDimensionsFromPaths = (options) => this.state.object &&
			this.state.object.parseDimensionsFromPaths(options);
		this.renderf = (ctx) => this.state.object &&
			this.state.object.renderf(ctx);
		this.toObject = (propertiesToInclude) =>
			this.state.object.toObject(propertiesToInclude);
		this.toDatalessObject = (propertiesToInclude) => this.state.object &&
			this.state.object.toDatalessObject(propertiesToInclude);
		this.toSVG = (reviver) => this.state.object &&
			this.state.object.toSVG(reviver);
		this.toString =  () => this.state.object &&
			this.state.object.toSVG();
		this.isSameColor =  () => this.state.object &&
			this.state.object.isSameColor();
		this.complexity =  () => this.state.object &&
			this.state.object.complexity();
		this.getObjects =  () => this.state.object &&
			this.state.object.getObjects();

	}

	draw(cb) {
		if (this.props.element instanceof Object) {
			fabric.PathGroup.fromElement(
				this.props.element,
				(instance) => super.draw(instance, cb),
				this.props
			);
		} else if (this.props.object instanceof Object) {
			fabric.PathGroup.fromObject(
				this.props.object,
				(instance) => super.draw(instance, cb)
			);
		} else {
			const paths = [];
			if (this.props.children instanceof Array) {
				this.props.children.forEach(child => paths.push(new fabric.Path(child.props.path, child.props)));
			} else {
				paths.push(new fabric.Path(this.props.children.props.path, this.props.children.props));
			}

			const object = new fabric.PathGroup(paths, this.props);
			super.draw(object, cb);
		}
	}

}

PathGroup.fromElement = (element, callback, options) => fabric.PathGroup.fromElement(element, callback, options);
PathGroup.fromObject = (object, callback) => fabric.PathGroup.fromObject(object, callback);
PathGroup.attribute = fabric.PathGroup.ATTRIBUTE_NAMES;

PathGroup.defaultProps = Object.assign(Path.defaultProps, {
	type: 'path-group',
	fill: '',
});
