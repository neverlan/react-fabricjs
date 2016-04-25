'use strict';

import React, { PropTypes } from 'react';
import {fabric} from 'fabric-webpack';
import diff from 'deep-diff';
import collection from './mixin/collection.js';
import observable from './mixin/observable.js';

export default class StaticCanvas extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			canvas: null,
		};

		collection(this);
		observable(this);

		//Static Canvas
		this.absolutePan = (point) => this.state.canvas &&
			this.state.canvas.absolutePan(point);
		this.bringForward = (object, intersecting) => this.state.canvas &&
			this.state.canvas.bringForward(object, intersecting);
		this.bringToFront = (object) => this.state.canvas &&
			this.state.canvas.bringToFront(object);
		this.centerObject = (object) => this.state.canvas &&
			this.state.canvas.centerObject(object);
		this.centerObjectH = (object) => this.state.canvas &&
			this.state.canvas.centerObjectH(object);
		this.centerObjectV = (object) => this.state.canvas &&
			this.state.canvas.centerObjectV(object);
		this.clear = () => this.state.canvas &&
			this.state.canvas.clear();
		this.clearContext = (ctx) => this.state.canvas &&
			this.state.canvas.clearContext(ctx);
		this.clone = (callback, properties) => this.state.canvas &&
			this.state.canvas.clone(callback, properties);
		this.cloneWithoutData = (callback) => this.state.canvas &&
			this.state.canvas.cloneWithoutData(callback);
		this.dispose = () => this.state.canvas &&
			this.state.canvas.dispose();
		this.fxCenterObjectH = (object, callbacks) => this.state.canvas &&
			this.state.canvas.fxCenterObjectH(object, callbacks);
		this.fxCenterObjectV = (object, callbacks) => this.state.canvas &&
			this.state.canvas.fxCenterObjectV(object, callbacks);
		this.fxRemove = (object, callbacks) => this.state.canvas &&
			this.state.canvas.fxRemove(object, callbacks);
		this.fxStraightenObject = (object) => this.state.canvas &&
			this.state.canvas.fxStraightenObject(object);
		this.getActiveGroup = () => this.state.canvas &&
			this.state.canvas.getActiveGroup();
		this.getActiveObject = () => this.state.canvas &&
			this.state.canvas.getActiveObject();
		this.getCenter = () => this.state.canvas &&
			this.state.canvas.getCenter();
		this.getContext = () => this.state.canvas &&
			this.state.canvas.getContext();
		this.getElement = () => this.state.canvas &&
			this.state.canvas.getElement();
		this.getHeight = () => this.state.canvas &&
			this.state.canvas.getHeight();
		this.getWidth = () => this.state.canvas &&
			this.state.canvas.getWidth();
		this.getZoom = () => this.state.canvas &&
			this.state.canvas.getZoom();
		this.loadFromDatalessJSON = (json, callback, reviver) => this.state.canvas &&
			this.state.canvas.loadFromDatalessJSON(json, callback, reviver);
		this.loadFromJSON = (json, callback, reviver) => this.state.canvas &&
			this.state.canvas.loadFromJSON(json, callback, reviver);
		this.moveTo = (object, index) => this.state.canvas &&
			this.state.canvas.moveTo(object, index);
		this.onBeforeScaleRotate = () => this.state.canvas &&
			this.state.canvas.onBeforeScaleRotate();
		this.relativePan = (point) => this.state.canvas &&
			this.state.canvas.relativePan(point);
		this.renderAll = (allOnTop) => this.state.canvas &&
			this.state.canvas.renderAll(allOnTop);
		this.renderTop = () => this.state.canvas &&
			this.state.canvas.renderTop();
		this.sendBackwards = (object, intersecting) => this.state.canvas &&
			this.state.canvas.sendBackwards(object, intersecting);
		this.sendToBack = (object) => this.state.canvas &&
			this.state.canvas.sendToBack(object);
		this.setBackgroundColor = (backgroundColor, callback) => this.state.canvas &&
			this.state.canvas.setBackgroundColor(backgroundColor, callback);
		this.setBackgroundImage = (image, callback, options) => this.state.canvas &&
			this.state.canvas.setBackgroundImage(image, callback, options);
		this.setDimensions = (dimensions, options) => this.state.canvas &&
			this.state.canvas.setDimensions(dimensions, options);
		this.setHeight = (value, options) => this.state.canvas &&
			this.state.canvas.setHeight(value, options);
		this.setOverlayColor = (overlayColor, callback) => this.state.canvas &&
			this.state.canvas.setOverlayColor(overlayColor, callback);
		this.setOverlayImage = (image, callback, options) => this.state.canvas &&
			this.state.canvas.setOverlayImage(image, callback, options);
		this.setViewportTransform = (vpt) => this.state.canvas &&
			this.state.canvas.setViewportTransform(vpt);
		this.setWidth = (value, options) => this.state.canvas &&
			this.state.canvas.setWidth(value, options);
		this.setZoom = (value) => this.state.canvas &&
			this.state.canvas.setZoom(value);
		this.straightenObject = (object) => this.state.canvas &&
			this.state.canvas.straightenObject(object);
		this.toDatalessJSON = (propertiesToInclude) => this.state.canvas &&
			this.state.canvas.toDatalessJSON(propertiesToInclude);
		this.toDatalessObject = (propertiesToInclude) => this.state.canvas &&
			this.state.canvas.toDatalessObject(propertiesToInclude);
		this.toDataURL = (options) => this.state.canvas &&
			this.state.canvas.toDataURL(options);
		this.toDataURLWithMultiplier = (format, multiplier, quality) => this.state.canvas &&
			this.state.canvas.toDataURLWithMultiplier(format, multiplier, quality);
		this.toJSON = (propertiesToInclude) => this.state.canvas &&
			this.state.canvas.toJSON(propertiesToInclude);
		this.toObject = (propertiesToInclude) => this.state.canvas &&
			this.state.canvas.toObject(propertiesToInclude);
		this.toString = () => this.state.canvas &&
			this.state.canvas.toString();
		this.toSVG = (options, reviver) => this.state.canvas &&
			this.state.canvas.toSVG(options, reviver);
		this.zoomToPoint = (point, value) => this.state.canvas &&
			this.state.canvas.zoomToPoint(point, value);

		// React
		this.getChild = this.getChild.bind(this);
	}

	componentDidMount() {
		const canvas = new fabric.Canvas(this.props.id);

		this.setState({canvas}, () => {
			this.initEvent.call(this);
			Object.keys(this.ref).forEach(key => {
				const ref = this.ref[key];
				ref.draw(obj => this.add(obj));
			});
		});
	}

	componentWillReceiveProps(nextProps) {

		/* Options Changed */
		if (diff(this.props.backgroundColor, nextProps.backgroundColor)) {
			this.setBackgroundColor(nextProps.backgroundColor);
		}
		if (diff(this.props.backgroundImage, nextProps.backgroundImage)) {
			this.setBackgroundImage(nextProps.backgroundImage);
		}

		if (this.props.height !== nextProps.height) {
			this.state.canvas.setHeight(nextProps.height);
		}
		if (this.props.width !== nextProps.width) {
			this.state.canvas.setHeight(nextProps.width);
		}

		if (diff(this.props.overlayColor, nextProps.overlayColor)) {
			this.setOverlayColor(nextProps.overlayColor);
		}
		if (diff(this.props.overlayImage, nextProps.overlayImage)) {
			this.setOverlayImage(nextProps.overlayImage);
		}

		if (diff(this.props.viewportTransform, nextProps.viewportTransform)) {
			this.setViewportTransform(nextProps.viewportTransform);
		}

		/* TODO: Event Changed */
		this.eventChanged(nextProps);
	}

	componentDidUpdate(prevProps, prevState) {
		/* TODO: Children Changed */
		if (prevState.canvas) {
			if (this.props.children instanceof Array) {
				this.props.children.forEach((child, i) => this.childAddedrRemove(prevProps.children[i], child, i));
			} else {
				this.childAddedrRemove(prevProps.children, this.props.children);
			}
		}

		this.state.canvas && this.state.canvas.renderAll();
	}

	childAddedrRemove(oldChild, child, index) {
		if (oldChild === null && child) {
			const ref = child.key ? this.ref[child.key] : this.ref[`layer${index}`];
			ref.draw(obj => this.insertAt(obj, index));
		} else if (oldChild && child === null) {
			const key = oldChild.key;
			const ref = key ? this.ref[key] : this.ref[`layer${index}`];
			const obj = ref.getObject();

			this.remove(obj);
			this.ref[ref] = null;
		}
	}

	initEvent() {
		const {canvas} = this.state;
		if (!canvas) return;

		if (this.props.beforeRender instanceof Function) {
			canvas.on('before:render', this.props.beforeRender);
		}
		if (this.props.afterRender instanceof Function) {
			canvas.on('after:render', this.props.afterRender);
		}
		if (this.props.onCanvasCleared instanceof Function) {
			canvas.on('canvas:cleared', this.props.onCanvasCleared);
		}
		if (this.props.onObjectAdded instanceof Function) {
			canvas.on('object:added', this.props.onObjectAdded);
		}
		if (this.props.onObjectRemoved instanceof Function) {
			canvas.on('object:removed', this.props.onObjectRemoved);
		}

	}

	eventChanged(nextProps) {
		const {canvas} = this.state;
		if (!canvas) return;

		if (this.props.beforeRender && !nextProps.beforeRender) {
			canvas.off('before:render');
		} else if (nextProps.beforeRender instanceof Function) {
			canvas.on('before:render', this.props.beforeRender);
		}

		if (this.props.afterRender && !nextProps.afterRender) {
			object.off('after:render');
		} else if (nextProps.afterRender instanceof Function) {
			object.on('after:render', this.props.afterRender);
		}

		if (this.props.onCanvasCleared && !nextProps.onCanvasCleared) {
			object.off('canvas:cleared');
		} else if (nextProps.onCanvasCleared instanceof Function) {
			object.on('canvas:cleared', this.props.onCanvasCleared);
		}

		if (this.props.onObjectAdded && !nextProps.onObjectAdded) {
			object.off('object:added');
		} else if (nextProps.onObjectAdded instanceof Function) {
			object.on('object:added', this.props.onObjectAdded);
		}

		if (this.props.onObjectRemoved && !nextProps.onObjectRemoved) {
			object.off('object:removed');
		} else if (nextProps.onObjectRemoved instanceof Function) {
			object.on('object:removed', this.props.onObjectRemoved);
		}
	}

	getChild(ref) {
		return this.ref[ref];
	}

	render() {
		const {id, children} = this.props;
		return (
			<div>
				<canvas id={id} width={this.props.width} height={this.props.height}/>
				{
					this.state.canvas &&
					React.Children.map(
						children,
						(child, i) => child && React.cloneElement(child, {
							ref: c => {
								if (c) {
									this.ref[child.ref||`layer${i}`] = c;
								}
							},
						})
					)
				}
			</div>
		);

	}
}

StaticCanvas.emptyJSON = fabric.StaticCanvas.EMPTY_JSON;
StaticCanvas.supports = (methodName) =>  fabric.StaticCanvas.supports(methodName);

StaticCanvas.propTypes = {
	allowTouchScrolling: PropTypes.bool,
	backgroundColor: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(fabric.Pattern)
	]),
	backgroundImage: PropTypes.instanceOf(fabric.Image),
	clipTo: PropTypes.func,
	controlsAboveOverlay: PropTypes.bool,
	FX_DURATION: PropTypes.number,
	imageSmoothingEnabled: PropTypes.bool,
	includeDefaultValues: PropTypes.bool,
	overlayColor: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(fabric.Pattern)
	]),
	overlayImage: PropTypes.instanceOf(fabric.Image),
	preserveObjectStacking: PropTypes.bool,
	renderOnAddRemove: PropTypes.bool,
	stateful: PropTypes.bool,
	svgViewportTransformation: PropTypes.bool,
	viewportTransform: PropTypes.array,

	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),

	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),

	id: PropTypes.string,
	beforeRender: PropTypes.func,
	afterRender: PropTypes.func,
	onCanvasCleared: PropTypes.func,
	onObjectAdded: PropTypes.func,
	onObjectRemoved: PropTypes.func,
};

StaticCanvas.defaultProps = {
	allowTouchScrolling: false,
	backgroundColor: '',
	backgroundImage: null,
	clipTo: null,
	controlsAboveOverlay: false,
	FX_DURATION: 500,
	imageSmoothingEnabled: true,
	includeDefaultValues: true,
	overlayColor: '',
	overlayImage: null,
	preserveObjectStacking: false,
	renderOnAddRemove: true,
	stateful: true,
	svgViewportTransformation: true,
	viewportTransform: null,

	width: 100,
	height: 100,

	id: 'c',
};
