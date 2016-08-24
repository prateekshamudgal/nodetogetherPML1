const port = process.env.PORT || '8080';
const host = process.env.HOST || '0.0.0.0';
//var port = '8080';
//var host = '0.0.0.0';
var express = require('express');
var app = express();

var rules = require('./app/');
app.use(rules);

app.listen(port,host);
console.log("Listening on : "+host+":"+port);
