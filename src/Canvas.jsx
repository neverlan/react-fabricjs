'use strict';

import { PropTypes } from 'react';
import StaticCanvas from './StaticCanvas.jsx';

export default class Canvas extends StaticCanvas {
	constructor(props, context) {
		super(props, context);

		this.state = {
			canvas: null,
		};

		this.ref = {};
		this.containsPoint = (e, target) => this.state.canvas &&
			this.state.canvas.containsPoint(e, target);
		this.isTargetTransparent = (target, x, y) => this.state.canvas &&
			this.state.canvas.isTargetTransparent(target, x, y);
		this.setCursor = (value) => this.state.canvas &&
			this.state.canvas.setCursor(value);
		this.findTarget = (e, skipGroup) => this.state.canvas &&
			this.state.canvas.findTarget(e, skipGroup);
		this.getPointer = (e, ignoreZoom, upperCanvasEl) => this.state.canvas &&
			this.state.canvas.getPointer(e, ignoreZoom, upperCanvasEl);
		this.getSelectionContext = () => this.state.canvas &&
			this.state.canvas.getSelectionContext();
		this.getSelectionElement = () => this.state.canvas &&
			this.state.canvas.getSelectionElement();
		this.setActiveObject = (object, e) => this.state.canvas &&
			this.state.canvas.setActiveObject(object, e);
		this.getActiveObject = () => this.state.canvas &&
			this.state.canvas.getActiveObject();
		this.discardActiveObject = (e) => this.state.canvas &&
			this.state.canvas.discardActiveObject(e);
		this.setActiveGroup = (group, e) => this.state.canvas &&
			this.state.canvas.setActiveGroup(group, e);
		this.discardActiveGroup = (e) => this.state.canvas &&
			this.state.canvas.discardActiveGroup(e);
		this.deactivateAll = () => this.state.canvas &&
			this.state.canvas.deactivateAll();
		this.deactivateAllWithDispatch = (e) => this.state.canvas &&
			this.state.canvas.deactivateAllWithDispatch(e);
		this.dispose = () => this.state.canvas &&
			this.state.canvas.dispose();
		this.drawControls = (ctx) => this.state.canvas &&
			this.state.canvas.drawControls(ctx);
	}
}

Canvas.propTypes = Object.assign(StaticCanvas.propTypes, {
	uniScaleTransform: PropTypes.bool,
	centeredScaling: PropTypes.bool,
	centeredRotation: PropTypes.bool,
	interactive: PropTypes.bool,
	selection: PropTypes.bool,
	selectionColor: PropTypes.string,
	selectionDashArray: PropTypes.array,
	selectionBorderColor: PropTypes.string,
	selectionLineWidth: PropTypes.number,
	hoverCursor: PropTypes.string,
	moveCursor: PropTypes.string,
	defaultCursor: PropTypes.string,
	freeDrawingCursor: PropTypes.string,
	rotationCursor: PropTypes.string,
	containerClass: PropTypes.string,
	perPixelTargetFind: PropTypes.bool,
	targetFindTolerance: PropTypes.number,
	skipTargetFind: PropTypes.bool,
	isDrawingMode: PropTypes.bool,
});

Canvas.defaultProps = Object.assign(StaticCanvas.defaultProps, {
	uniScaleTransform: false,
	centeredScaling: false,
	centeredRotation: false,
	interactive: true,
	selection: true,
	selectionColor: 'rgba(100, 100, 255, 0.3)',
	selectionDashArray: [],
	selectionBorderColor: 'rgba(255, 255, 255, 0.3)',
	selectionLineWidth: 1,
	hoverCursor: 'move',
	moveCursor: 'move',
	defaultCursor: 'default',
	freeDrawingCursor: 'crosshair',
	rotationCursor: 'crosshair',
	containerClass: 'canvas-container',
	perPixelTargetFind: false,
	targetFindTolerance: 0,
	skipTargetFind: false,
	isDrawingMode: false,
});
