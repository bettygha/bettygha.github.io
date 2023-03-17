const express = require('express');
const database = require('./connDemo');
const cors = require('cors');
const app =  express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/action', function(req, res) {
    let action = req.query.action;
    if (action == 'fetch') {
        let queryy = "SELECT * FROM name ORDER BY id DESC;";
        database.query(queryy, function(err, data) {
            if (err) {
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


app.listen(3000);
