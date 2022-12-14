const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	target: 'node',
	externalsPresets: { node: true },
	externals: [nodeExternals()],
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	name: 'node-express',
	entry: {
		lambda: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		clean: true,
		library: {
			type: 'commonjs2'
		}
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new ESLintPlugin({ exclude: 'node_modules' }),
		new CopyPlugin({
			patterns: [{ from: './AmazonRootCA1.pem', to: './' }]
		})
	]
};
