// server
require('net').createServer(function (socket) {
    console.log("connected");

    socket.on('data', function (data) {
        console.log(data.toString());
    });
})

.listen(8080);

// client
var s = require('net').Socket();
// console.log(s.connecting)
s.connect(8080);
// console.log(s.connecting)
s.write('How to send objects');

s.end();