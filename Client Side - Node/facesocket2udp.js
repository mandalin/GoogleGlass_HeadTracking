var net = require('net');

var sockets = [];

var server = net.createServer(function(socket){

sockets.push(socket);

socket.write('hello\n');
socket.write('world\n');

socket.on('data',function(data){

for (var i=0; i< sockets.length; i++){
socket.write(data);
}
});
});

server.listen(10.1.10.45:1338);

