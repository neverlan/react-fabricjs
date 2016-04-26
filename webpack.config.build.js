var path = require('path');
var webpack = require('webpack');
// var autoprefixer = require('autoprefixer');
var minimize = process.argv.indexOf('--minimize') !== -1;


var config = {
	devtool: 'eval',
	entry:  {
		// Main Bundle
		main: './src/react-fabric.js',

		// Canvas
		// StaticCanvas: ['./src/StaticCanvas.jsx'],
		// Canvas: ['./src/Canvas.jsx'],

		// Object
		// Circle: ['./src/shape/Circle.jsx'],
		// Ellipse: ['./src/shape/Ellipse.jsx'],
		// Line: ['./src/shape/Line.jsx'],
		// Path: ['./src/shape/Path.jsx'],
		// PathGroup: ['./src/shape/PathGroup.jsx'],
		// Polygon: ['./src/shape/Polygon.jsx'],
		// Polyline: ['./src/shape/Polyline.jsx'],
		// Rect: ['./src/shape/Rect.jsx'],
		// Triangle: ['./src/shape/Triangle.jsx'],
		//
		// Image: ['./src/Image.jsx'],
		// Text: ['./src/Text.jsx'],
		// IText: ['./src/IText.jsx'],

		// utils
		// imageFilter: ['./src/ImageFilters.js'],
		// color: ['./src/Color.js'],

	},
	resolve: {
		extensions: ["", ".jsx", ".js", ".scss"],
	},
	output: {
		path: path.join(__dirname, "lib"),
		filename: "[name].js",
		library: ["react-fabricjs"],
		libraryTarget: "umd"
	},
	externals: [
		{
			'react': {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			}
		},
		{
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom',
				amd: 'react-dom'
			}
		},
	],
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compressor: {
		// 		warnings: false
		// 	}
		// })
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src'),
				exclude: path.join(__dirname, 'node_modules'),
			},
		],
		noParse: [],
	}
};

if (minimize) {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	);
	config.devtool = 'source-map';
	config.output.filename = "[name].min.js";
}


module.exports = config;
