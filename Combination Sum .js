function g(n, arr) {
    let a = Array(n + 1).fill(0);
    a[0] = 1;
    for (let j = 0; j < arr.length; j++) {
        for (let i = 1; i <= n; i++) {
            if (arr[j] > i) continue;
            a[i] = a[i] + a[i - arr[j]];
        }
    }
    return a[n];
}

console.log(g(8, [2, 4, 6, 8]));
