

module.exports = function(db){

	var moment = require('moment')
	var jwt = require('jwt-simple')
	var _ = require('lodash')
	var exp = {};


	/*FRONTEND Authentication (JWT)*/
	exp.jwtTokenSecret = "secret-value";

	exp.jwtAuth = function(req, res, next){

		var token = (req.body && req.body.access_token) || req.query.access_token || req.headers["x-access-token"];

		if (token) {
			try {
				var decoded = jwt.decode(token, module.exports.jwtTokenSecret)
				
				decoded.exp <= Date.now() ? res.end('Access token has expired', 400) :  	

				q = 'SELECT * from User WHERE id=?;'
				db.connection.query(q, decoded.iss, function(err, rows, fields) {
					!err && rows.length == 1 ? req.user = rows[0] : res.end('Not authorized', 401)
					return next(); 
				})
			} catch (err) {
				console.log(err)
				res.end('Not authorized', 401)			
				/*return next()*/
			}
		} else {
			res.end('Not authorized', 401)
		}
	}

	exp.createToken = function(user){
		var expires = moment().add('days', 7).valueOf();
		var token = jwt.encode({
		  iss: user.id,
		  exp: expires
		}, module.exports.jwtTokenSecret);

		tokObj = {
		  token : token,
		  expires: expires,
		  user: user
		}

		return tokObj; 
	}


	exp.verifySameIdAsUser = function(req, res, next){
		req.params.userId == req.user.id ? next() : res.end('Cannot access user other than yourself.')
		return
	}

	return exp;


}



