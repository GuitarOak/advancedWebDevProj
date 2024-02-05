const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host     : 'localhost', 
  user     : 'root',
  password : 'test123', 
  database : 'myDB'
});

// Connect to MySQL
dbConnection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = dbConnection;