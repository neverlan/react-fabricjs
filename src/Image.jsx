'use strict';

import {PropTypes} from 'react';
import FabricObject from './base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Image extends FabricObject {
	constructor(props, context) {
		super(props, context);

		this.state = {object: null};

		this.getElement = () => this.state.object &&
			this.state.object.getElement();
		this.setElement = (element, callback, options) => this.state.object &&
			this.state.object.setElement(element, callback, options);
		this.setCrossOrigin = (value) => this.state.object &&
			this.state.object.setCrossOrigin(value);
		this.getOriginalSize = () => this.state.object &&
			this.state.object.getOriginalSize();
		this.toObject = (propertiesToInclude) => this.state.object &&
			this.state.object.toObject(propertiesToInclude);
		this.toSVG = (reviver) => this.state.object &&
			this.state.object.toSVG(reviver);
		this.getSrc = () => this.state.object &&
			this.state.object.getSrc();
		this.setSrc = (src, callback, options) => this.state.object &&
			this.state.object.setSrc(src, callback, options);
		this.toString = () => this.state.object &&
			this.state.object.toString();
		this.clone = (callback, propertiesToInclude) => this.state.object &&
			this.state.object.clone(callback, propertiesToInclude);
		this.applyFilters = (callback, filters, imgElement, forResizing) => this.state.object &&
			this.state.object.applyFilters(callback, filters, imgElement, forResizing);
		this.complexity = () => 1;
	}

	draw(canvas) {
		console.log(canvas);
		if (typeof(this.props.src) === 'string') {
			fabric.Image.fromURL(
				this.props.src,
				(instance) => super.draw(canvas, instance),
				this.props
			);
		} else if (this.props.object instanceof Object) {
			fabric.Image.fromObject(
				this.props.object,
				(instance) => super.draw(canvas, instance)
			);
		} else if (this.props.element instanceof Object) {
			fabric.Image.fromElement(
				this.props.element,
				(instance) => super.draw(canvas, instance),
				this.props
			);
		} else {
			const instance = new fabric.Image(this.props.imgElement, this.props);
			super.draw(canvas, instance);
		}
	}
}

Image.getSvgSrc = fabric.Image.prototype.getSrc;
Image.css = fabric.Image.CSS_CANVAS;
Image.fromObject = (object, callback) => fabric.Image.fromObject(object, callback);
Image.fromURL = (url, callback, imgOptions) => fabric.Image.fromURL(url, callback, imgOptions);
Image.fromElement = (element, callback, options) => fabric.Image.fromElement(element, callback, options);
Image.attribute = fabric.Image.ATTRIBUTE_NAMES;
Image.async = true;
Image.pngCompression = 1;

Image.propTypes = Object.assign(FabricObject.propTypes, {
	crossOrigin: PropTypes.oneOf(['', 'anonymous', 'use-credentials']),
	alignX: PropTypes.oneOf(['none', 'mid', 'min', 'max']),
	alignY: PropTypes.oneOf(['none', 'mid', 'min', 'max']),
	meetOrSlice: PropTypes.oneOf(['meet', 'slice']),
});

Image.defaultProps = Object.assign(FabricObject.defaultProps, {
	type: 'image',
	crossOrigin: '',
	alignX: 'none',
	alignY: 'none',
	meetOrSlice: 'meet',
	strokeWidth: 0,
});
