var WebSocket = require('ws')
  , ws = new WebSocket('92.186.1.156');
ws.on('open', function() {
    ws.send('something');
});
ws.on('message', function(message) {
    console.log('received: %s', message);
});
