const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'entries'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database with ID: ' + connection.threadId);
});

/*app.get('/action', function(req, res) {
  let action = req.query.action;
  if (action == 'fetch') {
    let query = "SELECT * FROM name ORDER BY id DESC;";
    connection.query(query, function(err, data) {
      if (err) {
        console.error(err);
        res.status(500).json({  
          message: "Error fetching data from database"
        });
      } else {
        res.status(200).json(data);
      }
    });
  } else {
    res.status(400).json({
      message: "Invalid action parameter"
    });
  }
});
*/

module.exports = connection;
