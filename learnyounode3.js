var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
//below we are converting buffer objects into strings 
var str = file.toString();

//below we are splitting the string and saying to add a newline to each so that this is how it splits the items in the array 
var split_string =  str.split('\n'); 

//below we need to subtract one because a newline \n is always added on at the end. So, below by doing .length we have created an array, by -1 we are just referring to that number 
console.log(split_string.length - 1)
