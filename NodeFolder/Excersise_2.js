const http = require('http');
const dt = require('./myModule');
const user = require('./userFile');
const url = require('url');

const port = 3000;

 /* const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write("The date and time are currently: " + dt.myDate() + user.getName());
        res.end();
    }
    if (req.url === '/apples') {
        res.write("Apple");
        res.end();
    }
    if (req.url === '/pears') {
        res.write("Pear");
        res.end();
    }
    if (req.url === '/strawberries') {
        res.write("Strawberry");
        res.end();
    }



}); */
const server = http.createServer((req,res)=>{
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(req.url);
    res.end();

});

server.listen(port); 
