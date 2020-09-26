var http = require('http');
http.createServer(function(request,response){
	response.writeHead(200,{'contant-type':'text/plain'})
	response.end("mohammad naseer22 \n")

}).listen(8080);
console.log('server runing at http://127.0.0.1:8080');


// hi agin