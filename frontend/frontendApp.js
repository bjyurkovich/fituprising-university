"use stict";

var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(__dirname + '/'));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//this is the magic that makes it all happen:  start the Express server.
var server = app.listen(9001, function () {
	console.log('Starting server on port ' + 9001)
});