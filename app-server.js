var express = require('express');
var app = express();
var connections = [];
var title = 'Untitled Presentation';
var audience = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

    socket.once('disconnect', function(){
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconnected: %s sockets remaining.", connections.length);
    });
    
    socket.on('join', function(payload){
        var newMember = {
            id: this.id,
            name: payload.name
        };
        this.emit('joined', newMember);
        audience.push(newMember);
        io.sockets.emit('audience', audience);
        console.log('Audience joined %s', payload.name);
    });

    socket.emit('welcome', {
        title: title
    });

    connections.push(socket);
    console.log("Connected: %s sockets connected", connections.length);
});

console.log('Server Listing at http://127.0.0.1:3000');
