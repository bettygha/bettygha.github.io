const http = require('http');
const dt = require('./myModule');
const user = require('./userFile');
const url = require('url');

const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("The date and time are currently: " + dt.myDate() + user.getName());
    res.end();
});
server.listen(port); 






/*const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let q = url.parse(req.url,true).query;
    res.write(q.first + " and " + q.second);
    res.end();
});
server.listen(port); */