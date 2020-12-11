# 创建文件夹，初始化文件夹，安装webpack
```
mkdir demo 
cd demo
npm init -y 
npm install --save-dev webpack webpack-cli
```
webpack 命令直接打包，找不到webpack命令就全局安装webpack

```
sudo npm install webpack -g
sudo npm install webpack-cli -g
```

# 创建目录结构
1. 新建一个src文件夹存放源代码，webpack默认入口是src下的index.js。
2. 新建一个 `webpack.config.js`来写webpack配置
3. 入口文件和出口文件如下

```
  const path = require('path')
  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'js/index.js',
    }
  }
```

# 这时候发现每次webpack构建时不会删除dist文件夹原有的东西 ，使用插件 clean-webpack-plugin

```
npm install --save-dev clean-webpack-plugin

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
plugins:[
    new CleanWebpackPlugin()
  ]
```

# 这时候除了输出文件夹中所有的东西都会被删除，我们需要用html文件，使用插件 html-webpack-plugin

```
npm i --save-dev html-webpack-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin')

new HtmlWebpackPlugin({
  title: 'My App',
  filename: 'lll.html'
})
```

# 使用jQuery或其他框架

```
npm i jquery --save-d
import $ from 'jquery'
```

# 使用图片怎么办 file-loader url-loader

使用file-loader直接复制图片，url-loader可以加限制，小图片转码为base64

```
npm i file-loader -S

```
```
module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      }
    ]
  },
```
```
npm i url-loader -S

```
```
module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 102400
            }
          }
        ]
      }
    ]
  },
```
# 使用css怎么办 

```
npm install --save-dev css-loader
npm install --save-dev style-loader
```

```
{
  test: /\.css$/,
  use: [ 'style-loader', 'css-loader' ]
}
```

# 使用babel-loader 转换 js

```
npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack
```

```
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
```

# 此时的css都是内部样式表，转换为外部样式表使用插件 ExtractTextWebpackPlugin

```
npm install --save-dev extract-text-webpack-plugin
```