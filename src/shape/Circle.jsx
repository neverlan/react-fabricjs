'use strict';

import React, { PropTypes } from 'react';
import {fabric} from 'fabric-webpack';

export default class Circle extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			object: null,
		};	

		this.draw = this.draw.bind(this);

		this.adjustPosition = to => this.state.object && 
			this.state.object.adjustPosition(to);
		this.animate = (property, value) => this.state.object && 
			this.state.object.animate(property, value);
		this.bringForward = intersecting => this.state.object && 
			this.state.object.bringForward(intersecting);
		this.bringToFront = () => this.state.object && 
			this.state.object.bringToFront();
		this.center = () => this.state.object && 
			this.state.object.center();
		this.centerH = () => this.state.object && 
			this.state.object.centerH();
		this.centerV = () => this.state.object && 
			this.state.object.centerV();
		this.clone = (callback, propertiesToInclude) => this.state.object && 
			this.state.object.clone(callback, propertiesToInclude);
		this.cloneAsImage = (callback) => this.state.object && 
			this.state.object.cloneAsImage(callback);
		this.complexity = () => this.state.object && 
			this.state.object.complexity();
		this.containsPoint = (point) => this.state.object && 
			this.state.object.containsPoint(point);
		this.drawBorders = (ctx) => this.state.object && 
			this.state.object.drawBorders(ctx);
		this.drawControls = (ctx) => this.state.object && 
			this.state.object.drawControls(ctx);
		this.fxStraighten = (callbacks) => this.state.object && 
			this.state.object.fxStraighten(callbacks);
		this.get = (property) => this.state.object && 
			this.state.object.get(property);
		this.getAngle = () => this.state.object && 
			this.state.object.getAngle();
		this.getBoundingRect = () => this.state.object && 
			this.state.object.getBoundingRect();
		this.getBoundingRectHeight = () => this.state.object && 
			this.state.object.getBoundingRectHeight();
		this.getBoundingRectWidth = () => this.state.object && 
			this.state.object.getBoundingRectWidth();
		this.getCenterPoint = () => this.state.object && 
			this.state.object.getCenterPoint();
		this.getClipTo = () => this.state.object && 
			this.state.object.getClipTo();
		this.getFill = () => this.state.object && 
			this.state.object.getFill();
		this.getFlipX = () => this.state.object && 
			this.state.object.getFlipX();
		this.getFlipY = () => this.state.object && 
			this.state.object.getFlipY();
		this.getLeft = () => this.state.object && 
			this.state.object.getLeft();
		this.getLocalPointer = (e, pointer) => this.state.object && 
			this.state.object.getLocalPointer(e, pointer);
		this.getOpacity = () => this.state.object && 
			this.state.object.getOpacity();
		this.getOriginX = () => this.state.object && 
			this.state.object.getOriginX();
		this.getOriginY = () => this.state.object && 
			this.state.object.getOriginY();
		this.getPointByOrigin = (originX, originY) => this.state.object && 
			this.state.object.getPointByOrigin(originX, originY);
		this.getRadiusX = () => this.state.object && 
			this.state.object.getRadiusX();
		this.getRadiusY = () => this.state.object && 
			this.state.object.getRadiusY();
		this.getScaleX = () => this.state.object && 
			this.state.object.getScaleX();
		this.getScaleY = () => this.state.object && 
			this.state.object.getScaleY();
		this.getShadow = () => this.state.object && 
			this.state.object.getShadow();
		this.getStrokeWidth = () => this.state.object && 
			this.state.object.getStrokeWidth();
		this.getSvgStyles = () => this.state.object && 
			this.state.object.getSvgStyles();
		this.getSvgTransform = () => this.state.object && 
			this.state.object.getSvgTransform();
		this.getSvgTransformMatrix = () => this.state.object && 
			this.state.object.getSvgTransformMatrix();
		this.getTop = () => this.state.object && 
			this.state.object.getTop();
		this.getTransformMatrix = () => this.state.object && 
			this.state.object.getTransformMatrix();
		this.getViewportTransform = () => this.state.object && 
			this.state.object.getViewportTransform();
		this.getVisible = () => this.state.object && 
			this.state.object.getVisible();
		this.getWidth = () => this.state.object && 
			this.state.object.getWidth();
		this.hasStateChanged = () => this.state.object && 
			this.state.object.hasStateChanged();
		this.intersectsWithObject = (other) => this.state.object && 
			this.state.object.intersectsWithObject(other);
		this.intersectsWithRect = (pointTL, pointBR) => this.state.object && 
			this.state.object.intersectsWithRect(pointTL, pointBR);
		this.isContainedWithinObject = (other) => this.state.object && 
			this.state.object.isContainedWithinObject(other);
		this.isContainedWithinRect = (pointTL, pointBR) => this.state.object && 
			this.state.object.isContainedWithinRect(pointTL, pointBR);
		this.isControlVisible = (controlName) => this.state.object && 
			this.state.object.isControlVisible(controlName);
		this.isType = (type) => this.state.object && 
			this.state.object.isType(type);
		this.moveTo = (index) => this.state.object && 
			this.state.object.moveTo(index);
		this.remove = () => this.state.object && 
			this.state.object.remove();
		this.renderf = (ctx, noTransform) => this.state.object && 
			this.state.object.render(ctx, noTransform);
		this.saveState = (options) => this.state.object && 
			this.state.object.saveState(options);
		this.scale = (value) => this.state.object && 
			this.state.object.scale(value);
		this.scaleToHeight = (value) => this.state.object && 
			this.state.object.scaleToHeight(value);
		this.scaleToWidth = (value) => this.state.object && 
			this.state.object.scaleToWidth(value);
		this.sendBackwards = () => this.state.object && 
			this.state.object.sendBackwards();
		this.sendToBack = () => this.state.object && 
			this.state.object.sendToBack();
		this.set = (key, value) => this.state.object && 
			this.state.object.set(key, value);
		this.setAngle = (value) => this.state.object && 
			this.state.object.setAngle(value);
		this.setClipTo = (clipTo) => this.state.object && 
			this.state.object.setClipTo(clipTo);
		this.setColor = (color) => this.state.object && 
			this.state.object.setColor(color);
		this.setControlsVisibility = (options) => this.state.object && 
			this.state.object.setControlsVisibility(options);
		this.setControlVisible = (controlName, visible) => this.state.object && 
			this.state.object.setControlVisible(controlName, visible);
		this.setCoords = (value) => this.state.object && 
			this.state.object.setCoords(value);
		this.setFill = (value) => this.state.object && 
			this.state.object.setFill(value);
		this.setFlipX = (value) => this.state.object && 
			this.state.object.setFlipX(value);
		this.setFlipY = (value) => this.state.object && 
			this.state.object.setFlipY(value);
		this.setGradient = (property, options) => this.state.object && 
			this.state.object.setGradient(property, options);
		this.setLeft = (value) => this.state.object && 
			this.state.object.setLeft(value);
		this.setOpacity = (value) => this.state.object && 
			this.state.object.setOpacity(value);
		this.setOptions = (options) => this.state.object && 
			this.state.object.setOptions(options);
		this.setOriginX = (value) => this.state.object && 
			this.state.object.setOriginX(value);
		this.setOriginY = (value) => this.state.object && 
			this.state.object.setOriginY(value);
		this.setPatternFill = (options) => this.state.object && 
			this.state.object.setPatternFill(options);
		this.setPositionByOrigin = (pos, originX, originY) => this.state.object && 
			this.state.object.setPositionByOrigin(pos, originX, originY);
		this.setRadius = (value) => this.state.object && 
			this.state.object.setRadius(value);
		this.setScaleX = (value) => this.state.object && 
			this.state.object.setScaleX(value);
		this.setScaleY = (value) => this.state.object && 
			this.state.object.setScaleY(value);
		this.setShadow = (options) => this.state.object && 
			this.state.object.setShadow(options);
		this.setSourcePath = (value) => this.state.object && 
			this.state.object.setSourcePath(value);
		this.setStroke = (value) => this.state.object && 
			this.state.object.setStroke(value);
		this.setStrokeWidth = (value) => this.state.object && 
			this.state.object.setStrokeWidth(value);
		this.setTransformMatrix = (transformMatrix) => this.state.object && 
			this.state.object.setTransformMatrix(transformMatrix);
		this.setupState = () => this.state.object && 
			this.state.object.setupState(value);
		this.setVisible = (value) => this.state.object && 
			this.state.object.setVisible(value);
		this.straighten = () => this.state.object && 
			this.state.object.straighten();
		this.toDatalessObject = (propertiesToInclude) => this.state.object && 
			this.state.object.toDatalessObject();
		this.toDataURL = () => this.state.object && 
			this.state.object.toDataURL(options);
		this.toggle = (property) => this.state.object && 
			this.state.object.toggle(property);
		this.toJSON = (propertiesToInclude) => this.state.object && 
			this.state.object.toJSON(propertiesToInclude);
		this.toLocalPoint = (point, originX, originY) => this.state.object && 
			this.state.object.toLocalPoint(point, originX, originY);
		this.toObject = (propertiesToInclude) => this.state.object && 
			this.state.object.toObject(propertiesToInclude);
		this.toString = () => this.state.object && 
			this.state.object.toString();
		this.toSVG = (reviver) => this.state.object && 
			this.state.object.toSVG(reviver);
		this.transform = (ctx, fromLeft) => this.state.object && 
			this.state.object.transform(ctx, fromLeft);
		this.translateToCenterPoint = (point, originX, originY) => this.state.object && 
			this.state.object.translateToCenterPoint(point, originX, originY);
		this.translateToOriginPoint = (point, originX, originY) => this.state.object && 
			this.state.object.translateToOriginPoint(point, originX, originY);
	}

	draw() {
		const object = new fabric.Circle(this.props.options);
		this.setState({object});

		// for(var propertyName in object) {
		// 	console.log(propertyName)
		// }

		return object;
	}

	render() {
		return <div />;
	}
}

Circle.fromElement = (element, options) => fabric.Circle.fromElement(element, options);
Circle.fromObject = (object) => fabric.Circle.fromObject(object);
Circle.attribute = fabric.Circle.ATTRIBUTE_NAMES;


// top: PropTypes.number,
// left: PropTypes.number,
// width: PropTypes.number,
// height: PropTypes.number,
// type: PropTypes.string,
// visible: PropTypes.bool,
// radius: PropTypes.number,
// opacity: PropTypes.number,
// padding: PropTypes.number,

// angle: PropTypes.number,
// endAngle: PropTypes.number,
// startAngle: PropTypes.number,

// originX: PropTypes.oneOf(['left', 'right', 'center']),
// originY: PropTypes.oneOf(['left', 'right', 'center']),

// scaleX: PropTypes.number,
// scaleY: PropTypes.number,

// backgroundColor: PropTypes.string,
// selectable: PropTypes.bool,
// shadow: PropTypes.object,

// stroke: PropTypes.string,
// strokeDashArray: PropTypes.array,
// strokeLineCap: PropTypes.oneOf(['butt', 'round', 'square']),
// strokeLineJoin: PropTypes.oneOf(['bevil', 'round', 'miter']),
// strokeMiterLimit: PropTypes.number, // used for strokeLineJoin = "miter"
// strokeWidth: PropTypes.number,

// borderColor: PropTypes.string,
// borderOpacityWhenMoving: PropTypes.number,
// borderScaleFactor: PropTypes.number,
// cornerColor: PropTypes.string,
// cornerSize: PropTypes.number,
// fill: PropTypes.string,
// fillRule: PropTypes.string,
// centeredRotation: PropTypes.bool,
// centeredScaling: PropTypes.bool,
// clipTo: PropTypes.func,

// hasBorders: PropTypes.bool,
// hasControls: PropTypes.bool,
// hasRotatingPoint: PropTypes.bool,
// lockMovementX: PropTypes.bool,
// lockMovementY: PropTypes.bool,
// lockRotation: PropTypes.bool,
// lockScalingFlip: PropTypes.bool,
// lockScalingX: PropTypes.bool,
// lockScalingY: PropTypes.bool,
// lockUniScaling: PropTypes.bool,
// minScaleLimit: PropTypes.number,

// flipX: PropTypes.bool,
// flipY: PropTypes.bool,
		
// evented: PropTypes.bool,
// globalCompositeOperation: PropTypes.string,
// hoverCursor: PropTypes.string,
// includeDefaultValues: PropTypes.bool,
// oCoords: PropTypes.object,
// perPixelTargetFind: PropTypes.bool,
// rotatingPointOffset: PropTypes.number,
// stateProperties: PropTypes.array,
// transformMatrix: PropTypes.array,
// transparentCorners: PropTypes.bool,
Circle.propTypes = {
	options: PropTypes.shape({
		angle: PropTypes.number,
		backgroundColor: PropTypes.string,
		borderColor: PropTypes.string,
		borderOpacityWhenMoving: PropTypes.number,
		borderScaleFactor: PropTypes.number,
		centeredRotation: PropTypes.bool,
		centeredScaling: PropTypes.bool,
		clipTo: PropTypes.func,
		cornerColor: PropTypes.string,
		cornerSize: PropTypes.number,
		endAngle: PropTypes.number,
		evented: PropTypes.bool,
		fill: PropTypes.string,
		fillRule: PropTypes.string,
		flipX: PropTypes.bool,
		flipY: PropTypes.bool,
		globalCompositeOperation: PropTypes.string,
		hasBorders: PropTypes.bool,
		hasControls: PropTypes.bool,
		hasRotatingPoint: PropTypes.bool,
		height: PropTypes.number,
		hoverCursor: PropTypes.string,
		includeDefaultValues: PropTypes.bool,
		left: PropTypes.number,
		lockMovementX: PropTypes.bool,
		lockMovementY: PropTypes.bool,
		lockRotation: PropTypes.bool,
		lockScalingFlip: PropTypes.bool,
		lockScalingX: PropTypes.bool,
		lockScalingY: PropTypes.bool,
		lockUniScaling: PropTypes.bool,
		minScaleLimit: PropTypes.number,
		oCoords: PropTypes.object,
		opacity: PropTypes.number,
		originX: PropTypes.oneOf(['left', 'right', 'center']),
		originY: PropTypes.oneOf(['left', 'right', 'center']),
		padding: PropTypes.number,
		perPixelTargetFind: PropTypes.bool,
		radius: PropTypes.number,
		rotatingPointOffset: PropTypes.number,

		scaleX: PropTypes.number,
		scaleY: PropTypes.number,
		selectable: PropTypes.bool,
		shadow: PropTypes.object,
		startAngle: PropTypes.number,
		stateProperties: PropTypes.array,

		stroke: PropTypes.string,
		strokeDashArray: PropTypes.array,
		strokeLineCap: PropTypes.oneOf(['butt', 'round', 'square']),
		strokeLineJoin: PropTypes.oneOf(['bevil', 'round', 'miter']),
		strokeMiterLimit: PropTypes.number, // used for strokeLineJoin = "miter"
		strokeWidth: PropTypes.number,
		top: PropTypes.number,
		transformMatrix: PropTypes.array,
		transparentCorners: PropTypes.bool,
		type: PropTypes.string,
		visible: PropTypes.bool,
		width: PropTypes.number,
	}),
};

Circle.defaultProps = {

};
