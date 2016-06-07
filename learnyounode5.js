var fs = require('fs');
path = require('path'); 
fs.readdir(process.argv[2], 'utf8', function callback(err, files){
  if (err) {
    console.log(err)
  } else {
    files.forEach(function(entry){
      if (path.extname(entry) === ("." +process.argv[3])) {
        console.log(entry);
      }
    });
  }
});