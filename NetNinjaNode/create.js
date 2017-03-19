var fs = require('fs');

// fs.mkdir('stuff', function(err){
//   fs.readFile('text.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeMe.txt', 'something new');
//   });
// });

fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff', function(err){
    console.log(err);
  });
})
