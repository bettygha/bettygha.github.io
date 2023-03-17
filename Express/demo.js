const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
    console.log('Api is called ......');
    next();
});

app.get('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"> <input name="title"> <button type="submit">Submit</button> </form>');
});

app.use('/product', (req, res, next) => {
    console.log('Api is in here ......');
    next();
});

app.post('/product', (req, res, next) => {
    console.body(res.body);
    res.redirect('back');
    
   
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Server is running on port 3000');
});
