const path = require('path')

const config = {
  target: 'electron-renderer',
  name: 'react',
	entry: {
		reactApp: './src/react/index.tsx'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '..', 'dist', 'react')
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, use: 'ts-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.less$/, use: [ 'style-loader', 'css-loader', 'less-loader' ] }
		]
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ]
	},
	plugins: [],
	node: {
		fs: 'empty'
	},
	mode: process.env.NODE_ENV || 'development'
}

module.exports = config