'use strict';

import {PropTypes} from 'react';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Image extends FabricObject {
	constructor(props, context) {
		super(props, context);
		this.state = {
			object: null,
		};

		this.draw = this.draw.bind(this);

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
			this.state.object.toSVG(callback, filters, imgElement, forResizing);
		this.complexity = () => 1;

		this.getSvgSrc = this.getSrc;
	}

	draw() {
		const object = new fabric.Group(this.props);
		this.setState({object});

		return object;
	}

}

Image.css = fabric.Image.CSS_CANVAS;
Image.fromObject = (object, callback) => fabric.Image.fromObject(object, callback);
Image.fromURL = (url, callback, imgOptions) => fabric.Image.fromURL(url, callback, imgOptions);
Image.attribute = fabric.Image.ATTRIBUTE_NAMES;
Image.fromElement = (element, callback, options) => fabric.Image.fromElement(element, callback, options);
Image.async = true;
Image.async.pngCompression = 1;

Image.propTypes = Object.assign(FabricObject.propTypes, {
	crossOrigin: PropTypes.oneOf(['', 'anonymous', 'use-credentials']),
	alignX: PropTypes.oneOf(['none', 'mid', 'min', 'max']),
	alignY: PropTypes.oneOf(['none', 'mid', 'min', 'max']),
	meetOrSlice: PropTypes.oneOf(['meet', 'slice']),
});

Image.defaultProps = Object.assign(FabricObject.defaultProps, {
	type: 'group',
	crossOrigin: '',
	alignX: 'none',
	alignY: 'none',
	meetOrSlice: 'meet',
	strokeWidth: 0,
});
