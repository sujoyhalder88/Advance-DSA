let ternarySearch = (start, end, target, arr) => {
    //If the end side of array is smaller than the start, then the element doesn't exist in the array
    if (end >= start) {
        //Find the two mid points to divide the array into three parts
        let mid1 = Math.floor(start + (end - start) / 3);
        let mid2 = Math.floor(end - (end - start) / 3);

        //We check both the mid point to see if it is the target element
        if (arr[mid1] == target) {
            return mid1;
        } else if (arr[mid2] == target) {
            return mid2;
        }

        //Now we check to see if target is in the start section.
        if (target < arr[mid1]) {
            return ternarySearch(start, mid1 - 1, target, arr);
        } //Then to see if target is in the end section.
        else if (target > arr[mid2]) {
            return ternarySearch(end, mid2 + 1, target, arr);
        } //Otherwise the target exist in the middle section.
        else {
            return ternarySearch(mid1 + 1, mid2 - 1, target, arr);
        }
    }
    return -1;
};
let start = 0;
let end = 9;
let target = 11;
console.log(ternarySearch(start, end, target, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
