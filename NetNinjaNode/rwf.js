//Noob

// var fs = require('fs');
//
// fs.readFile('text.txt', 'utf8', function(err, data){
//   console.log(data);
// });

// Moderate

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/text.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');

// myReadStream.on('data', function(chunk){
//     console.log('new chunk receive');
//     myWriteStream.write(chunk);
// });

// Pro
myReadStream.pipe(myWriteStream);
