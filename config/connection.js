// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "Astros1!",
//   database: "burger_db"
// });

var connection 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Astros1!',
    database: 'npxthf02ksmrn44d'
  })
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;