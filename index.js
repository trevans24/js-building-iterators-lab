var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


/* myEach */

// myEach(numArray, function print(element, index, arr) {
//    console.log('inside myEach', element, index, arr);
//  });

/* myMap */

// var input = ["a","b","c"];
// var output = myMap(input, function capitalize(v){
//     return v.toUpperCase();
// });
// console.log('Testing myMap');
// console.log(output);
// console.log(output[0] === "A" && output[1] === "B" && output[2] === "C"); // assertion

var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
var final = myReduce(input, function(x, y) {
    return x + y;
}, "hi");
console.log("final", final);

console.log("the end");
