const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'js/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=102400&name=[name].[ext]'
          
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins:[

    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'lll.html'
    }),
  ]
}