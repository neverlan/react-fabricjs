var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var config = {
	devtool: 'eval',
	entry:  {
		app: [
			'eventsource-polyfill',
			'webpack-hot-middleware/client',
			'./example/index.jsx'
		],
	},
	resolve: {
		extensions: ["", ".jsx", ".js", ".scss"],
		alias: {
			'react-fabricjs': path.join(__dirname, 'src'),
			'react-fabricjs/lib': path.join(__dirname, 'src'),
		},
	},
	output: {
		path: path.join(__dirname, 'example/public/'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel'],
				include: [path.join(__dirname, 'src'), path.join(__dirname, 'example')],
				exclude: path.join(__dirname, 'node_modules'),
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader?sourceMap',
					'postcss-loader',
				],
				include: path.join(__dirname, 'css'),
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader?sourceMap',
					'postcss-loader',
					'sass-loader?sourceMap&sourceMapContents',
				],
				include: path.join(__dirname, 'css'),
			},
			// {
			// 	test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			// 	loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]"
			// },
			// {
			// 	test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			// 	loader: "file-loader?name=[name].[ext]"
			// },
			// {
			// 	test: /\.(jpe?g|png|gif|svg)$/i,
			// 	loaders: [
			// 		'file?hash=sha512&digest=hex&name=[hash].[ext]',
			// 		'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			// 	]
			// }

		],
		noParse: [],

	},
	postcss: function () {
		return [autoprefixer];
	},
};
//
// deps.forEach(function (dep) {
// 	var depPath = path.resolve(nodeModules, dep);
// 	config.resolve.alias[dep.split(path.sep)[0]] = depPath;
// 	config.module.noParse.push(depPath);
// });

module.exports = config;
