let http = require('http');
let url = require('url');
let addmod = require('./addmod.js');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    let q = url.parse(req.url,true);
    let fileName = "." + q.pathname;
    if(q.pathname === "/add.js"){
        addmod.add(req,res,q.query);
    }
    else{
        fs.readFile(fileName,(err,data)=>{
            if(err){
                res.statusCode = 404;
                res.setHeader('Content-Type','text/plain');
                res.write("404 Not Found");
                  res.end();
                }
        
            
})} 
});
server.listen(3000);
