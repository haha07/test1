/*var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/

var express = require('express')
,http = require('http')
,app = express()
, server = http.ClientRequest(app);

app.get('/',function(req,res){
	res.send('Hello /');
});

app.get('/world.html',function(req,res){
	res.send('Hello world');
});

server.listen(8000, function(){
	console.log('port'+server.address().port);
});



/*dkdkdkdkd*/