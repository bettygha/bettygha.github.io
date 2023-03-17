const fs = require('fs');
const http = require('http');


http.createServer(function(req,res){
    fs.readFile('demoFile.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
    fs.writeFile('myText.txt','Hello Content !!!',function(err){
        if(err) throw err;
        console.log("Saved!");
    })
}).listen(3000);
