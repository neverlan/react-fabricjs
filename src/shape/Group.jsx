'use strict';

import {PropTypes} from 'react';
import FabricObject from '../base/Object.jsx';
import {fabric} from 'fabric-webpack';

export default class Group extends FabricObject {
	constructor(props, context) {
		super(props, context);
		this.state = {
			object: null,
		};

		this.draw = this.draw.bind(this);

		this.toString = () => this.state.object &&
			this.state.object.toString();
		this.addWithUpdate = (object) => this.state.object &&
			this.state.object.addWithUpdate(object);
		this.removeWithUpdate = (object) => this.state.object &&
			this.state.object.removeWithUpdate(object);
		this.toObject = (propertiesToInclude) => this.state.object &&
			this.state.object.toObject(propertiesToInclude);
		this.renderf = () => this.state.object &&
			this.state.object.render();
		this.realizeTransform = (object) => this.state.object &&
			this.state.object.realizeTransform(object);
		this.destroy = () => this.state.object &&
			this.state.object.destroy();
		this.saveCoords = () => this.state.object &&
			this.state.object.saveCoords();
		this.hasMoved = () => this.state.object &&
			this.state.object.hasMoved();
		this.setObjectsCoords = () => this.state.object &&
			this.state.object.setObjectsCoords();
		this.toSVG = (reviver) => this.state.object &&
			this.state.object.toSVG(reviver);
		this.get = (prop) => this.state.object &&
			this.state.object.get(prop);
	}

	draw() {
		const object = new fabric.Group(this.props);
		this.setState({object});

		return object;
	}

}

Group.fromObject = (object) => fabric.Group.fromObject(object);
Group.async = true;

Group.propTypes = FabricObject.propTypes;
Group.defaultProps = Object.assign(FabricObject.defaultProps, {
	strokeWidth: 0,
	type: 'group',
});
