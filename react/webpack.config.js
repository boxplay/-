const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry:'./index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve()+'/dist'
  },
  mode:'development',
  plugins:[
    new htmlWebpackPlugin({
      template:'./index.html'
    })
  ],
  module:{
    rules:[
      {
				test: /\.(js|jsx)$/,
				use: {
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-react']
          }
        },
        
			}
    ]
  },
  devServer:{
    static:{
      directory:path.join(__dirname, 'dist'),
    },
		compress: false,
		port: 9002
  }
}
