var net =  require('net');

// this server only receives
var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log('node server received', data.toString());
  });

  socket.on('close', function() {
    console.log('node server closed');
  });
});

server.listen(6001, 'localhost');

// this client only sends
var client = new net.Socket();


client.connect(6000, '127.0.0.1');

client.setNoDelay(true);

client.write('this message is from node\n'); 
client.write("Well now");

//client.end();
client.on('close', function() {
  console.log('node client closed');
});

