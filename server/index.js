var server = require('ws').Server;
var s = new server({ port: 5001});

s.on('connection', function(ws){  
    console.log('client has entered');    
    ws.on('message', function(message){
        console.log(message);
        // var sender = message.value.sender;
        // var text = message.value.text;
        // var time = message.value.timestamp;        
        // console.log('New message from '+sender+' @'+time+": "+text);
        //  Broadcast recieved Message to all Clients
        s.clients.forEach(function e(client){
            if(client !== ws)
                client.send(message);
        });
    }); 
    ws.on('close', function(ws){
        console.log("client has left");
    });
});


// s.on('conection', function(ws){
//     ws.on('close', function(message){
//         console.log("'WS Server is closing...'")
//     });
// });