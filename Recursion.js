// here are first example below?
/*
function recurs() {
    recurs();
}
// call stack overflow
recurs();
*/

//============================================//
// how to stop that recurtion repited call
/*
let counter = 0;
function recurs() {
    if (counter > 3) {
        return console.log("done");
    }
    counter++;
    console.log(counter);
    return recurs();
}
// call stack overflow
recurs();
*/
//=================================================//
//========iterative approach=================
//==problems factorial number==
//4!=4*3*2*1=25ans
/*
function iterativeFactorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
        // result *= i;
        result = result * i;
    }
    return result;
}
console.log(iterativeFactorial(5));
// iterativeFactorial(4);
*/

// ===============recursive approach==============
//==problems factorial number==
//4!=4*3*2*1=25ans

// function recursiveFactorial(num) {
//     if (num == 1) {
//         return 1;
//     }
//     let ans = recursiveFactorial(num - 1);
//     let result = num * ans;
//     return result;
//     // return num * recursiveFactorial(num - 1);
// }
// console.log(recursiveFactorial(4));

//========================================fibonaccy series ========
// ==========iterative approach=======
// print 5th fibonaccy number 0,1,1,2,3,4,5,

function iterativeFibonacci(num) {
    let arr = [0, 1];
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum = arr[i] + arr[i + 1];
        arr.push(sum);
    }
    return arr;
    // console.log(arr);
}
console.log(iterativeFibonacci(6));
// iterativeFibonacci(5);

//====== recursive approach============

function recursiveFibonacci(num) {
    if (num < 2) {
        return 1;
    }
    return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}
console.log(recursiveFibonacci(6));
