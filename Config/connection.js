
var mysql = require('mysql');

var connection;

if (process.env.HERBDB_URL) {
	connection = mysql.createConnection(process.env.HERBDB_URL);
} else {

	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'herb_materia_medica_db'
	})
};

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;