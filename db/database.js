const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "test123",
  database: "myDB",
});

dbConnection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = dbConnection;
