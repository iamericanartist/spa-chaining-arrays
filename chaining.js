var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// console.log("integers array =",integers );

//////////////////////////DIRECTIONS/////////////////////////////
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// ////////////////////////LONG HAND//////////////////////////////
// // 1. Sort the numbers in descending order (10, 9, 8, 7, etc).
// // with sort results
// var sorted = integers.sort(function(a, b){return b-a});
// console.log("sorted result =",sorted );
// // chaining.js:11 sorted result = [29, 25, 21, 20, 18, 13, 12, 11, 8, 7, 6, 3, 2, 1]

// // 2. Remove any integers greater than 19.
// // added Filter results
// var filtered = sorted.filter(function(x) {return x <= 19;});
// console.log("filtered result =",filtered );
// // chaining.js:17 filtered result = [18, 13, 12, 11, 8, 7, 6, 3, 2, 1]

// // 3. Multiply each remaining number by 1.5 and then subtract 1.
// // added map results
// var mapped = filtered.map(function(y){return (y* 1.5)-1;});
// console.log("mapped result =",mapped );
// // chaining.js:23 mapped result = [26, 18.5, 17, 15.5, 11, 9.5, 8, 3.5, 2, 0.5]

// // 4. Then output (either in the DOM or the console) the sum of all the resulting numbers.
// // added map results
// var reduced = mapped.reduce(function(a, b){return a + b;});
// console.log("reduced result =",reduced );
// // chaining.js:29 reduced result = 111.5


///////////////////////combined below////////////////////////////
console.log("RESULTS: ",integers.sort(function(a, b){return b-a}).filter(function(x){return x <= 19;}).map(function(y){return (y* 1.5)-1;}).reduce(function(a, b){return a + b;}));

outputEl.innerHTML = "sorted/filtered/mapped/reduced: " + integers.sort(function(a, b){return b-a}).filter(function(x){return x <= 19;}).map(function(y){return (y* 1.5)-1;}).reduce(function(a, b){return a + b;});

var howIDidIt = "<h3>THE STRING</h3>" + " integers.sort(function(a, b){return b-a})" + ".filter(function(x){return x <= 19;})" + ".map(function(y){return (y* 1.5)-1;})" + ".reduce(function(a, b){return a + b;});"

howIDidItEl.innerHTML = howIDidIt;
// chaining.js:36 RESULTS:  [26, 18.5, 17, 15.5, 11, 9.5, 8, 3.5, 2, 0.5]