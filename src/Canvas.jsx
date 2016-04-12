'use strict';

import React, { PropTypes } from 'react';
import {fabric} from 'fabric-webpack';

export default class Canvas extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			canvas: null,
		};

		this.ref = {};

		this.absolutePan = (point) => this.state.canvas &&
			this.state.canvas.absolutePan(point);
		this.bringForward = (object, intersecting) => this.state.canvas &&
			this.state.canvas.bringForward(object, intersecting);
		this.bringToFront = (object) => this.state.canvas &&
			this.state.canvas.bringToFront(object);
		this.calcOffset = () => this.state.canvas &&
			this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();
		// this.calcOffset = () => this.state.canvas &&
		// 	this.state.canvas.calcOffset();

	}

	// getChildContext() {
	// 	return {
	// 		canvas: this.state.canvas,
	// 	};
	// }

	componentWillMount() {

	}

	componentDidMount() {
		const canvas = new fabric.Canvas(this.props.id);


		this.setState({canvas}, () => {
			Object.keys(this.ref).forEach(key => {
				const ref = this.ref[key];
				const object = ref.draw();
				canvas.add(object);
			});
		});
	}

	getChild(ref) {
		return this.ref[ref];
	}

	componentWillReceiveProps(nextProps) {
	}

	componentDidUpdate(prevProps, prevState) {
		this.state.canvas && this.state.canvas.renderAll();
	}

	componentWillUnmount() {

	}

	render() {
		const {id, children} = this.props;

		return (
			<div>
				<canvas id={id}/>
				{
					this.state.canvas &&
					React.Children.map(
						children,
						(child, i) => React.cloneElement(child, {
							ref: (c) => {
								this.ref[child.ref] = c;
							},
						})
					)
				}
			</div>
		);
	}

}


Canvas.childContextTypes = {
	canvas: PropTypes.object,
};

Canvas.propTypes = {
	static: PropTypes.bool,
	options: PropTypes.shape({
		allowTouchScrolling: PropTypes.bool,
		backgroundColor: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.instanceOf(fabric.Pattern),
		]),
		backgroundImage: PropTypes.instanceOf(fabric.Image),
		centeredRotation: PropTypes.bool,
		centeredScaling: PropTypes.bool,
		clipTo: PropTypes.func,
		containerClass: PropTypes.string,
		controlsAboveOverlay: PropTypes.bool,
		defaultCursor: PropTypes.string,
		freeDrawingCursor: PropTypes.string,
		FX_DURATION: PropTypes.number,
		hoverCursor: PropTypes.string,
		imageSmoothingEnabled: PropTypes.bool,
		includeDefaultValues: PropTypes.bool,
		interactive: PropTypes.bool,
		moveCursor: PropTypes.string,
		overlayColor: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.instanceOf(fabric.Pattern),
		]),
		overlayImage: PropTypes.instanceOf(fabric.Image),
		perPixelTargetFind: PropTypes.bool,
		preserveObjectStacking: PropTypes.bool,
		renderOnAddRemove: PropTypes.bool,
		rotationCursor: PropTypes.string,
		selection: PropTypes.bool,
		selectionBorderColor: PropTypes.string,
		selectionColor: PropTypes.string,
		selectionDashArray: PropTypes.array,
		selectionLineWidth: PropTypes.number,
		skipTargetFind: PropTypes.bool,
		stateful: PropTypes.bool,
		svgViewportTransformation: PropTypes.bool,
		targetFindTolerance: PropTypes.number,
		uniScaleTransform: PropTypes.bool,
		viewportTransform: PropTypes.array,
	}),
};

Canvas.defaultProps = {
	id: 'c',
	static: false,
};
