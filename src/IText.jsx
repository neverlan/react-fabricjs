'use strict';

import {PropTypes} from 'react';
import Text from './Text';
import {fabric} from 'fabric-webpack';

export default class IText extends Text {
	constructor(props, context) {
		super(props, context);

		this.state = {object: null};

		this.isEmptyStyles = () => this.state.object &&
			this.state.object.isEmptyStyles();
		this.setSelectionStart = (index) => this.state.object &&
			this.state.object.setSelectionStart(index);
		this.setSelectionEnd = (index) => this.state.object &&
			this.state.object.setSelectionEnd(index);
		this.getSelectionStyles = () => this.state.object &&
			this.state.object.getSelectionStyles();
		this.setSelectionStyles = (styles) => this.state.object &&
			this.state.object.setSelectionStyles(styles);
		this.renderCursorOrSelection = () => this.state.object &&
			this.state.object.renderCursorOrSelection();
		this.get2DCursorLocation = (selectionStart) => this.state.object &&
			this.state.object.get2DCursorLocation(selectionStart);
		this.getCurrentCharStyle = (lineIndex, charIndex) => this.state.object &&
			this.state.object.getCurrentCharStyle(lineIndex, charIndex);
		this.getCurrentCharFontSize = (lineIndex, charIndex) => this.state.object &&
			this.state.object.getCurrentCharFontSize(lineIndex, charIndex);
		this.getCurrentCharColor = (lineIndex, charIndex) => this.state.object &&
			this.state.object.getCurrentCharColor(lineIndex, charIndex);
		this.renderCursor = (boundaries, ctx) => this.state.object &&
			this.state.object.renderCursor(boundaries, ctx);
		this.renderSelection = (chars, boundaries, ctx) => this.state.object &&
			this.state.object.renderSelection(chars, boundaries, ctx);
		this.toObject = (propertiesToInclude) => this.state.object &&
			this.state.object.toObject(propertiesToInclude);
	}

	draw(canvas) {
		let object;
		if (this.props.object instanceof Object) {
			object = fabric.IText.fromObject(this.props.object);
		} else {
			object = new fabric.IText(this.props.text, this.props);
		}
		console.log(object);

		super.draw(canvas, object);
	}

	initEvent() {
		const {object} = this.state;
		if (!(object instanceof fabric.Object)) return;

		super.initEvent();
		if (this.props.onChanged instanceof Function) {
			object.on('changed', this.props.onChanged);
		}
		if (this.props.onSelectionChanged instanceof Function) {
			object.on('selection:changed', this.props.onSelectionChanged);
		}
		if (this.props.onEditingEntered instanceof Function) {
			object.on('editing:entered', this.props.onEditingEntered);
		}
		if (this.props.onEditingExited instanceof Function) {
			object.on('editing:exited', this.props.onEditingExited);
		}
	}

	eventChanged(nextProps) {
		const {object} = this.state;
		if (!(object instanceof fabric.Object)) return;

		super.eventChanged(nextProps);
		if (this.props.onChanged && !nextProps.onChanged) {
			object.off('changed');
		} else if (nextProps.onChanged instanceof Function) {
			object.on('changed', this.props.onChanged);
		}
		if (this.props.onSelectionChanged && !nextProps.onSelectionChanged) {
			object.off('selection:changed');
		} else if (nextProps.onSelectionChanged instanceof Function) {
			object.on('selection:changed', this.props.onSelectionChanged);
		}
		if (this.props.onEditingEntered && !nextProps.onEditingEntered) {
			object.off('editing:entered');
		} else if (nextProps.onEditingEntered instanceof Function) {
			object.on('editing:entered', this.props.onEditingEntered);
		}
		if (this.props.onEditingExited && !nextProps.onEditingExited) {
			object.off('editing:exited');
		} else if (nextProps.onEditingExited instanceof Function) {
			object.on('editing:exited', this.props.onEditingExited);
		}
	}
}
IText.fromObject = (object) => fabric.IText.fromObject(object);

IText.propTypes = Object.assign(Text.propTypes, {
	selectionStart: PropTypes.number,
	selectionEnd: PropTypes.number,
	selectionColor: PropTypes.string,
	isEditing: PropTypes.bool,
	editable: PropTypes.bool,
	editingBorderColor: PropTypes.string,
	cursorWidth: PropTypes.number,
	cursorColor: PropTypes.string,
	cursorDelay: PropTypes.number,
	cursorDuration: PropTypes.number,
	styles: PropTypes.object,
	caching: PropTypes.bool,
});

IText.defaultProps = Object.assign(Text.defaultProps, {
	type: 'i-text',
	selectionStart: 0,
	selectionEnd: 0,
	selectionColor: 'rgba(17,119,255,0.3)',
	isEditing: false,
	editable: true,
	editingBorderColor: 'rgba(102,153,255,0.25)',
	cursorWidth: 2,
	cursorColor: '#333',
	cursorDelay: 1000,
	cursorDuration: 600,
	// styles: [],
	// caching: true,
});
