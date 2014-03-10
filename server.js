var http = require('http');
var url = require('url');
var courses = require('./courses.js');
http.createServer(function(q,r){
	r.writeHead(200,{
		'Access-Control-Allow-Origin':'*',
		'Content-Type':'application/json'});
	r.end(JSON.stringify(courses));
}).listen(process.env.PORT || 30000);
