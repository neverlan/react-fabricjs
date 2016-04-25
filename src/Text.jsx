'use strict';

import {PropTypes} from 'react';
import FabricObject from './base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Text extends FabricObject {
	constructor(props, context) {
		super(props, context);

		this.state = {object: null};

		this.toString = () => this.state.object &&
			this.state.object.toString();
		this.isEmptyStyles = () => this.state.object &&
			this.state.object.isEmptyStyles();
		this.renderf = (ctx) => this.state.object &&
			this.state.object.render(ctx);
		this.toObject = (propertiesToInclude) => this.state.object &&
			this.state.object.toObject(propertiesToInclude);
		this.toSVG = (reviver) => this.state.object &&
			this.state.object.toSVG(reviver);
		this.complexity = () => 1;
	}

	draw(canvas) {
		let object;
		if (this.props.object instanceof Object) {
			object = fabric.Text.fromObject(this.props.object);
		} else if (this.props.element instanceof Object) {
			object = fabric.Text.fromElement(this.props.element, this.props);
		} else {
			object = new fabric.Text(this.props.text, this.props);
		}

		super.draw(canvas, object);
	}
}

Text.attribute = fabric.Text.ATTRIBUTE_NAMES;
Text.defaultSvgFontSize = fabric.Text.DEFAULT_SVG_FONT_SIZE;
Text.fromElement = (element, options) => fabric.Text.fromElement(element, options);
Text.fromObject = (object) => fabric.Text.fromObject(object);

Text.propTypes = Object.assign(FabricObject.propTypes, {
	fontSize: PropTypes.number,
	fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	fontFamily: PropTypes.string,
	textDecoration: PropTypes.oneOf(['', 'underline', 'overline', 'line-through']),
	textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
	fontStyle: PropTypes.oneOf(['', 'normal', 'italic', 'oblique']),
	lineHeight: PropTypes.number,
	textBackgroundColor: PropTypes.string,
});

Text.defaultProps = Object.assign(FabricObject.defaultProps, {
	type: 'text',
	stateProperties: FabricObject.defaultProps.stateProperties.concat(['fontFamily',
		'fontWeight',
		'fontSize',
		'text',
		'textDecoration',
		'textAlign',
		'fontStyle',
		'lineHeight',
		'textBackgroundColor',
  ]),
	fontSize: 40,
	fontWeight: 'normal',
	fontFamily: 'Times New Roman',
	textDecoration: '',
	textAlign: 'left',
	fontStyle: '',
	lineHeight: 1.16,
	textBackgroundColor: '',
	stroke: null,
	shadow: null,
});
