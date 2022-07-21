//You are given an array of length n (n ≤ 100), we need to count all possible sextuples
//which folstart the given equation

function upperBound(arr, length, target) {
    let start = 0;
    let end = length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (target >= arr[mid]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}
function lowerBound(arr, length, target) {
    let start = 0;
    let end = length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (target <= arr[mid]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}
function findSextuplets(arr, n) {
    let index = 0;
    let occor = Array.from({ length: n * n * n + 1 }, (_, i) => 0);
    for (i = 0; i < n; i++) {
        if (arr[i] != 0) {
            for (j = 0; j < n; j++) {
                for (k = 0; k < n; k++) {
                    occor[index++] = arr[i] * (arr[j] + arr[k]);
                }
            }
        }
    }

    occor.sort((a, b) => a - b);

    let result = 0;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            for (k = 0; k < n; k++) {
                let val = arr[i] * arr[j] + arr[k];
                result +=
                    upperBound(occor, index, val) -
                    lowerBound(occor, index, val);
            }
        }
    }

    return result;
}

let arr = [2, 3];
let n = arr.length;

console.log(findSextuplets(arr, n));
