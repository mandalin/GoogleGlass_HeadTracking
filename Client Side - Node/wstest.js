//var socket = new WebSocket('ws:192.168.1.156:1338');
//var socket = new WebSocket('ws:192.168.150.142:1338');
 //google embarcadero office
var socket = new WebSocket('ws:10.1.10.45:1338');
// Open the socket
socket.onopen = function(event) {
	
	// Send an initial message
	socket.send('I am the client and I\'m listening!');
	
	// Listen for messages
	socket.onmessage = function(event) {
		console.log('Client received a message',event);
	};
	
	// Listen for socket closes
	socket.onclose = function(event) {
		console.log('Client notified socket has closed',event);
	};
	
	// To close the socket....
	//socket.close()

};

