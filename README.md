# Getting Started

Clone the repo and run:

```bash
sudo npm install
```

You will need to make a file called `lib/dbconfig.js`.  In the file, you need to put this:

```javascript
//DB stuff
var mysql = require('mysql')

module.exports.connection = mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "password",
	database : "fituprising"
});

module.exports.knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'fituprising',
        charset  : 'utf8'
  }
});
```
Changing the username and password for your database.

To load the database, 

```bash
mysql -u root -p < data/data-model.sql
```

To see the DB with initial data:

```bash
mysql -u root -p < data/initialData.sql
```

Then start the server:

```bash
nodemon app.js
```



