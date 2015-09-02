var db = require('../lib/dbconfig')
var Bookshelf = require('bookshelf')(db.knex);
/*var crypto = require("crypto");*/


//User
module.exports.User = Bookshelf.Model.extend({
    tableName: 'User'
});