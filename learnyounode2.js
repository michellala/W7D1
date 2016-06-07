var array =process.argv;
var total = 0;


//below: for the variable we are saying it's an index number. So, the second number in the index is where we want to start. We want it to be less than the array length (If it was = to it then it would add one extra step. then we are saying to increment by earch number in the array. Note: we have to sum up the numbers still!
for (var i = 2; i < array.length; i++){


  //you are incrementing the array by each variable amount here (so you are saying whichever number within the argv that has the index number to sum them up)
  total += Number(process.argv[i])
}

console.log(total);
// need a bunch of numbers
//loop through them and get sum 

