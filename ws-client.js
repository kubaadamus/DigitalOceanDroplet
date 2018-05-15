
var connection = new WebSocket('ws://localhost:3000');
connection.onmessage = function (event) { 
alert(value=event.data);
};
