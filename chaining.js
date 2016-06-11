var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// console.log("integers array =",integers );

//////////////////////////DIRECTIONS/////////////////////////////
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

//////////////////////////LONG HAND//////////////////////////////
// // 1. Sort the numbers in descending order (10, 9, 8, 7, etc).
// // with sort results
// var sorted = integers.sort(function(a, b){return b-a});
// console.log("sorted result =",sorted );

// // 2. Remove any integers greater than 19.
// // added Filter results
// var filtered = sorted.filter(function(x) {return x <= 19;});
// console.log("filtered result =",filtered );

// // 3. Multiply each remaining number by 1.5 and then subtract 1.
// // added map results
// var mapped = filtered.map(function(y){return (y* 1.5)-1;});
// console.log("mapped result =",mapped );
///////////////////////combined below////////////////////////////

// 4. Then output (either in the DOM or the console) the sum of all the resulting numbers.
console.log("RESULTS: ",integers.sort(function(a, b){return b-a}).filter(function(x){return x <= 19;}).map(function(y){return (y* 1.5)-1;}));
outputEl.innerHTML = "sorted/filtered/mapped: " + integers.sort(function(a, b){return b-a}).filter(function(x){return x <= 19;}).map(function(y){return (y* 1.5)-1;});