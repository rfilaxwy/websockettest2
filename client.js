var s = require('net').Socket();
// s.connect(80, 'google.com');
// s.write('GET http://www.google.com/ HTTP/1.1\n\n');
s.connect(8080)
s.write('Bonjour mon ami, comment ca va')

s.on('data', function(d){
    console.log(d);
});

s.end();