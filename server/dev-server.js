const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('../webpack.config.js')
const comipiler = webpack(config)

app.use(webpackDevMiddleware(comipiler, {
    publicPath: config.output.publicPath
}))

app.listen(3000, function(){
    console.log('dev server running on port 3000')
})