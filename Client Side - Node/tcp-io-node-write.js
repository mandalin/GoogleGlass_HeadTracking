var net =  require('net');
var client = new net.Socket();

client.connect(6000, '127.0.0.1');
client.setNoDelay(true);
client.write('this message is from node\n'); 



var WebSocket = require('ws');
//  ws = new WebSocket('ws:10.1.10.45:1338');
    ws = new WebSocket('ws:10.160.138.213:1338');
ws.on('open', function() {
    //  ws.send('something');
      });
      ws.on('message', function(message) {
          console.log('received: %s', message);
		//  var parsed_message = message.split("orientation");
		  client.write('this message is from node\n'); 
		  client.write(message); 

          });
        


// this client only sends
//var net =  require('net');
//var client = new net.Socket();
//
//
//client.connect(6000, '127.0.0.1');
//
//client.setNoDelay(true);
//
//client.write('this message is from node\n'); 
//client.write("Well now\n");
//		  client.write('received: %s\n', message);
//
//client.end();
//client.on('close', function() {
//  console.log('node client closed');
//
//});






//var WebSocket =  require('ws');
//var socket = new WebSocket('ws:10.1.10.45:1338');
// Open the socket
//socket.onopen = function(event) {
  
// Send an initial message
//socket.send('I am the client and I\'m listening!');
              
// Listen for messages
//socket.onmessage = function(event) {
//console.log('Client received a message',event);
//};
                                      
// Listen for socket closes
//socket.onclose = function(event) {
//console.log('Client notified socket has closed',event);
//};
                                                              
 // To close the socket....
//socket.close()
//};

                                                                      



//This Is How You Would Receive with Net
//var net =  require('net');
// this server only receives
//var server = net.createServer(function(socket) {
// socket.on('data', function(data) {
//    console.log('node server received', data.toString());
//  });
//
//  socket.on('close', function() {
//    console.log('node server closed');
//  });
//});

//server.listen(6001, 'localhost');

// this client only sends
//var net =  require('net');
//var client = new net.Socket();


//client.connect(6000, '127.0.0.1');

//client.setNoDelay(true);

//client.write('this message is from node\n'); 
//client.write("Well now\n");

//client.end();
//client.on('close', function() {
//  console.log('node client closed');

//});

