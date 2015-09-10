"use stict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
/*var compression = require('compression');*/

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
/*app.use(compression());*/

var db = require('./lib/dbconfig');
var config = require('./lib/configs');
var auth = require('./lib/auth');


//API route includes
var login = require('./routes/login');
var user = require('./routes/user');
var payments = require('./routes/payments');


//FRONTEND ROUTE
app.post('/login', login.login);
app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});



//BACKEND API ROUTES
app.post('/api/login', login.login);

app.get('/api/user/:userId', auth.jwtAuth, auth.verifySameIdAsUser, user.getUser);
app.post('/api/user/', user.addUser);
app.put('/api/user/:userId', auth.jwtAuth, auth.verifySameIdAsUser, user.updateUser);
app.put('/api/user/:userId/password', auth.jwtAuth, auth.verifySameIdAsUser, user.updateUserPassword);


app.post('/api/pay', payments.makePayment);
app.post('/', payments.getPaymentToken);



//this is the magic that makes it all happen:  start the Express server.
var server = app.listen(config.port, function () {
	console.log('Starting server on port ' + config.port)
});