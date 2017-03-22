// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
	var acc = initialValue;
	var current = arr[0];

	if(!initialValue){
		acc = arr[0];
		current = arr[1];}

 for (var i = 0; i < arr.length; i++) {
 	if(i === 0 && !initialValue){
 	 		i++;
 	 	}
	acc = callback(acc,arr[i],i,arr);
 }
 	return acc;
}
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/


// var sum = ["a", "b", "c" , "d"].reduce( function(acc, val) { 
// 	console.log("acc: " + acc + ", val: " + val);
// 	return acc + val; 
// });

// console.log(sum);
var ourSum = myReduce(["A", "B"], function(acc, val) { 
	console.log("acc: " + acc + ", val: " + val);
	return acc + val; }, 0
	);
console.log(ourSum);

// export this function (you can ignore this for now)
module.exports = myReduce;
