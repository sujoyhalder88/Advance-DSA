// var twoSum = function (arr, target) {
//     for (let i = 0, j = arr.length - 1; i < j; ) {
//         let sum = arr[i] + arr[j];
//         if (sum === target) {
//             return [i + 1, j + 1];
//         } else if (sum < target) {
//             i++;
//         } else {
//             j--;
//         }
//     }
// };

// console.log(twoSum([1, 3, 4, 8, 9], 11));

//==============================================================//

// function TwoPointer(arr, target) {
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]+arr[j]==target){
//         return [i,j]
//       }
//     }
//   }
// }
// console.log(TwoPointer([2, 7, 12, 11], 23));

//=====================================================//
// function TwoPointer(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         let sum = arr[start] + arr[end];
//         if (sum == target) {
//             return [start, end];
//         } else if (sum < target) {
//             start++;
//         } else {
//             end--;
//         }
//     }
// }
// console.log(TwoPointer([5, 7, 8, 13], 15));

//====================================================//
