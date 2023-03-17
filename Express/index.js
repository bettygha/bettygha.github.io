let express = require('express');
let productHandler = require('./routes/productHandler');
let app = express();

app.use('/add-product',productHandler);
app.use('/product',productHandler);

app.listen(3000,(error)=>{
    if(error){
        throw error;}
    console.log('Server is running on port 3000');
});