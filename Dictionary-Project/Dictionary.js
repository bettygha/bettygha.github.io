const express = require('express');
const database = require('./word');
const cors = require('cors');
const app =  express();
app.use(cors());


app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/action', function(req, res) {
    let action = req.query.action;
    if (action == 'fetch') {
        let queryy = "SELECT * FROM entries;";
         database.query(queryy, function(err, data) {
            if (err) {
                console.log(err);
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
app.listen(3000, function() {
    console.log('Server listening on port 3000');
  });


