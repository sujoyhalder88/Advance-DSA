function linearSearch(arr, target) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            ans.push(i);
        }
    }
    return ans;
}
console.log(linearSearch([1, 9, 6, 8, 5, 6, 10], 6));

//===================================================================//
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == target) {
//             return i;
//         }
//     }
// }
// console.log(linearSearch([1, 9, 8, 5, 6, 10], 6));
