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
const query = "SELECT * FROM entries WHERE word=" 
const searchWord = (word) => {
  return new Promise((resolve , reject )=>{
    connection.query(query + mysql.escape(word), function(err, data) {
        resolve(data);
        reject("Error fetching data from database" + err) }        
      )})}
 
module.exports.searchWord = searchWord;
