import mongoose from './config/mongoose';
import express from './config/express';
import passport from './config/passport';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT ||3000;

var db = mongoose();
var app = express();
var psp = passport();

app.listen(3000, function(){
    console.log('Start node.js on port ' + process.env.PORT );
});
module.exports = app;