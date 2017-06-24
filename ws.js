// test websocket demo
var app = require('./app.js').listen(3000);
var ws = require('socket.io').listen(app);
ws.on('connection', function(client){
    client.on('message', function(data){
        console.log('hello there!')
    })
    client.on('disconnect', function(){
        console.log('disconnect');
    })
    client.emit('push', {hello: 'message from server'})
})
