var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config.js');

var app = express();

app.use(express.static(__dirname+'/public'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.listen(3000);
