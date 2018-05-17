var app = require('express')()
var server = require('http').Server(app);
var io = require('socket.io')(server);
var count=0;


app.get('/',function(request,response){
	
		response.sendFile('/root/index.html');

});

io.on('connection',function(data){
	console.log('Connection!');
	count++;
	data.send(count);
});

server.listen(80);