var fs = require('fs');
path = require('path');

module.exports = function(dir,filterStr,callback){

  fs.readdir(dir, function(error, files){
 
  if(error) {
   callback(error);
 }else {
  var result = [];
   files.forEach(function(entry){
     if (path.extname(entry) === ("." + filterStr)) {
       result.push(entry)
     }
   });
   callback(null, result);
 }
});

};
