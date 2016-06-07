
//this one you are getting it just like you did with the fs but with http
var http = require('http');

http.get(process.argv[2], function(response){
 response.setEncoding('utf8')
 response.on("data", function (data) {
   console.log(data);
 });
});