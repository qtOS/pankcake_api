var mongoose = require('mongoose');
var connnectionString = 'mongodb://localhost/pankakes';

mongoose.connect(connnectionString);

mongoose.connection.on('connected', function(){
  console.log('Making pancakes, Makin\' bacon pankcakes, yo!');
});

mongoose.connection.on('error', function(err){
  console.log(err+ ': ya dun fucked up billy');
});

mongoose.connection.on('disconnected', function(){
  console.log('So long, Billy. It was nice meeting you.');
});
