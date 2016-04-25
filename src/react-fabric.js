'use strict';

import _StaticCanvas from './StaticCanvas.jsx';
import _Canvas from './Canvas.jsx';

import _Circle from './shape/Circle.jsx';
import _Ellipse from './shape/Ellipse.jsx';
import _Line from './shape/Line.jsx';
import _Path from './shape/Path.jsx';
import _PathGroup from './shape/PathGroup.jsx';
import _Polygon from './shape/Polygon.jsx';
import _Polyline from './shape/Polyline.jsx';
import _Rect from './shape/Rect.jsx';
import _Triangle from './shape/Triangle.jsx';

import _Image from './Image.jsx';
import _Text from './Text.jsx';
import _Itext from './IText.jsx';

import _imageFilter from './ImageFilters.js';
import _color from './Color.js';

// Main Bundle
export default {
	StaticCanvas: _StaticCanvas,
	Canvas: _Canvas,

	Circle: _Circle,
	Ellipse: _Ellipse,
	Line: _Line,
	Path: _Path,
	PathGroup: _PathGroup,
	Polygon: _Polygon,
	Polyline: _Polyline,
	Rect: _Rect,
	Triangle: _Triangle,

	Image: _Image,
	Text: _Text,
	Itext: _Itext,

	imageFilter: _imageFilter,
	color: _color,
};

// Canvas
export let StaticCanvas = _StaticCanvas;
export let Canvas = _Canvas;

// Shape
export let Circle = _Circle;
export let Ellipse = _Ellipse;
export let Line = _Line;
export let Path = _Path;
export let PathGroup = _PathGroup;
export let Polygon = _Polygon;
export let Polyline = _Polyline;
export let Rect = _Rect;
export let Triangle = _Triangle;

export let Image = _Image;
export let Text = _Text;
export let Itext = _Itext;

// utils
export let imageFilter = _imageFilter;
export let color = _color; 
