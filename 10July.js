// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

// function myFunction(a, n) {
//     return ` In this array index ${n} positon ${a[n - 1]}`;
// }
// console.log(myFunction([1, 2, 3, 4, 5], 3));   // output: -3
// console.log(myFunction([10, 9, 8, 7, 6], 5));  // output: -6
// console.log(myFunction([7, 2, 1, 6, 3], 1));   // output: -7

//=========================================================================//
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

// function myFunction(a) {
//     return a.slice(3);
// }
// console.log(myFunction([1, 2, 3, 4])); //Expected [4]
// console.log(myFunction([5, 4, 3, 2, 1, 0])); //Expected [2,1,0]
// console.log(myFunction([99, 1, 1])); //Expected []

//=============================================================================//

// function myFunction(a) {
//     return a.slice(-3);
// }
// console.log(myFunction([1, 2, 3, 4])); //Expected [2,3,4]
// console.log(myFunction([5, 4, 3, 2, 1, 0])); //Expected [2,1,0]
// console.log(myFunction([99, 1, 1])); //Expected [99,1,1]

//===============================================================================//
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

// function myFunction(a, b) {
//     let result = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b) {
//             result.push(a[i]);
//         }
//     }
//     return result;
// }
// console.log(myFunction([1, 2, 3], 2)); //Expected [1,3]
// console.log(myFunction([1, 2, "2"], "2")); //Expected [1,2]
// console.log(myFunction([1, 2, "2", 1], 1)); //Expected [2,"2"]
// console.log(myFunction([false, "2", 1], false)); //Expected ["2",1]

//===================================================================================//
