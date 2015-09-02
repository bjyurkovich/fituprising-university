var db = require('../lib/dbconfig')
var Bookshelf = require('bookshelf')(db.knex);
var User = require('../model/models').User;
var utils = require('../lib/utils');

var Users = Bookshelf.Collection.extend({
  model: User
});

//http://json-schema.org/latest/json-schema-validation.html
var userSchema = {
	"title": "User Schema",
	"type": "object",
	"properties": {
		"firstName": {
			"type": "string"
		},
		"lastName": {
			"type": "string"
		},
		"email": {
			"description": "email",
			"type": "string",
			"minimum": 0
		},
		"password": {
			"description": "password",
			"type": "string",
			"minLength": 1
		},
		"admin": {
			"description": "admin flag",
			"type": "integer",
			"minLength": 1
		},
		"registered": {
			"description": "registered flag",
			"type": "integer",
			"minLength": 1
		}
	},
	"required": ["firstName", "lastName", "email", "password"],
	"additionalProperties": false
}

var userPutSchema = {
	"title": "User Put Schema",
	"type": "object",
	"properties": {
		"firstName": {
			"type": "string"
		},
		"lastName": {
			"type": "string"
		},
		"email": {
			"description": "email",
			"type": "string",
			"minimum": 0
		},
		"registered": {
			"description": "registered",
			"type": "integer",
			"minLength": 1
		}
	},
	"required": [],
	"additionalProperties": false
}


module.exports.addUser = function(req, res){

	valResult = utils.validate(userSchema, req.body);
	(!valResult.valid) ? res.json(valResult, 400):
	
	User.forge(
		req.body
	).save()
	.then(function(user){
		delete user.attributes['password']
		res.json(user);
	})
	.catch(function(err){
		res.json(err);
	})
}

module.exports.getUser = function(req, res){


	User.forge({
		id: req.params.userId
	}).fetch()
	.then(function(user){
		delete user.attributes['password']
		res.json(user);
	})
	.catch(function(err){
		res.json(err);
	})
}

module.exports.updateUser = function(req, res){

	valResult = utils.validate(userPutSchema, req.body);
	(!valResult.valid) ? res.json(valResult, 400):

	User.forge({id: req.params.userId})
	.fetch({require: true})
	.then(function(user){
			user.save(req.body)
			.then(function(){
				res.json({status: "updated"});
			})
			.catch(function(err){
			res.json(err, 400);
		})
	})
	.catch(function(err){
		res.json(err);
	})
}

module.exports.updateUserPassword = function(req, res){
	
	if(req.body.password == undefined){
		res.json('You must specify a password', 400)
	}

	q = 'UPDATE User SET `password`=SHA2(?,256) WHERE id=?';
	db.connection.query(q, [req.body.password, req.params.userId], function(err, rows, fields){
		if(!err){
			res.json({status:"updated"})
		}else{
			res.json(err)
		}
	})
	
}