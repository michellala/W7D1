

var filterFunction = require('./module.js');
var dir = process.argv[2];
var filterStr= process.argv[3];

filterFunction(dir, filterStr, function (error, list){
  if (error) {
      return console.error('Ups there was an error', error);
  }
  list.forEach(function (file) {
      console.log(file);
    });
  });
