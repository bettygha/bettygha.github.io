const express = require('express');
const database = require('./word');
const app = express();

app.get('/action',  function (req, res) {
    
    let word = req.query.word;
    database.searchWord(word).then((result)=>{
        if(result.length > 0){
            
            res.status(200).json(result);
        }
        else{
            res.status(404).json({error: "word not found"});
        }
       

    }).catch(()=>{
        res.status(500).json({error: "error"});
    })
});
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});


