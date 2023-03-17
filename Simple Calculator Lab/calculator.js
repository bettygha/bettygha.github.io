let express = require('express');
let app = express();
const path = require('path');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');


app.use('/calculator',function(req,res,next){
    console.log("API Is called....");
    next();

})
app.get('/calculator',function(req,res){
    let firstNum = req.query.firstNum;
    let secondNum = req.query.secondNum;
    let result ;
    if(req.query.operation == 'add'){
        result = parseFloat(firstNum) + parseFloat(secondNum);
    }
    else if(req.query.operation == 'subtract'){
        result = parseFloat(firstNum) - parseFloat(secondNum);
    }
    else if(req.query.operation == 'multiply'){
        result = parseFloat(firstNum) * parseFloat(secondNum);
    }
    else if(req.query.operation == 'divide'){
        result = parseFloat(firstNum) / parseFloat(secondNum);
    }
    res.render('answer',{
        result: String(result)
    });
    

})

app.listen(3000);
