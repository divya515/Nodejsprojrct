var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "divya",
  database:"company_database"
});

conn.connect(function(err) {
  if (err) {
      console.log("Error");
      return
  }
  console.log("Connected!");
    conn.query('select*from employee', function (err, result) {
      if (err) throw err;
      console.log( result);
    });
  });