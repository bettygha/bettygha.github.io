let express = require('express');
let app = express();

// using the app we are configuring the route of 'GET' and pasth is '/'
//when ever request for this endpoint => Hello world
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.listen(3000);