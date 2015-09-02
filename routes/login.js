db = require('../lib/dbconfig.js')
auth = require('../lib/auth.js')
var moment = require('moment')
var jwt = require('jwt-simple')


module.exports.login = function(req, res){
	q = 'SELECT * from User WHERE email=? AND password=SHA2(?, 256);'
	db.connection.query(q, [req.body.email, req.body.password], function(err, rows, fields) {

	  if (rows.length == 1){
	  	delete rows[0]['password']
	  	res.json(auth.createToken(rows[0]));
	  } 
	  else{
	  	res.json({"status": "unauthorized"},401)
	  }
	  
	});
}