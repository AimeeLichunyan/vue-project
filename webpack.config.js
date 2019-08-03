/**
   *created by aimeeLi in 2017-08-17
 **/

const webpack = require('webpack');
const path = require("path");
//  const ExtracTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devServer: {
   historyApiFallback: true,
   hot: true,
   inline: true,
   contentBase: './src',
   port: 3033
 },
 devtool: 'source-map',
 // 配置入口文件
 entry: './src/index.js',
    // vendor: ['react', 'react-dom','react-router-dom']
   
 // 配置打包输出
 output: {
   path: path.resolve(__dirname, './dist'),  
   // publicPath: '/', 
   filename: '[name]-[hash].js',
   // chunkFilename: './bundle.chunck.js'
 },
 module: {
  rules: [
      { 
        test: /\.vue$/, 
        use: {
          loader: 'vue-loader',
          options: {
            preserveWhitespace: false,// ignore space
            extractCSS: true,// extract css
            transformToRequire: {
              video: ['src', 'poster'],
              source: 'src',
              img: 'src',
              image: 'xlink:href'
            }
          }
        } 
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: ['css-loader', 'less-loader']
        })
      },
      { 
        test: /\.(ttf|eot|svg|woff|woff2)$/, 
        use: 'url-loader' 
      },
    ]
       

   },
   resolve: {
     extensions: ['.vue','.js', '.jsx','json',],
    //  alias: {
    //   'vue$': 'vue/dist/vue.esm.js',
    //  }
   },
 plugins: [

   new webpack.HotModuleReplacementPlugin(),
   new OpenBrowserPlugin({url: 'http://localhost:3033'}),
   new HtmlWebpackPlugin({template: './src/index.html'}),
   new VueLoaderPlugin(),
   new ExtractTextPlugin("[name].css",{allChunks: true})
 ]
}
