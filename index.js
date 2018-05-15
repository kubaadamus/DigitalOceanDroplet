var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

var count=0

app.get('/',function(request,response){

	response.sendFile('/root/index.html')

})

io.on('connection',function(data){

count++
data.send(count + " active sockets")

})

server.listen(80)
