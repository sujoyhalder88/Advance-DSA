// Higher -Order-Function

let data = [
    {
        name: "Microsoft",
        catagory: "build application",
        start: 1972,
        end: 2022,
    },
    { name: "Apple", catagory: "build OS", start: 1974, end: 2050 },
    { name: "Phonix", catagory: "build Androde", start: 1955, end: 2030 },
    { name: "Axios", catagory: "Api", start: 1999, end: 2070 },
];

let arr = [1, 15, 20, 25, 65, 66, 88, 99, 13];

// =============Normal loop

// for (let i = 0; i < data.length; i++) {
//     console.log(data[0]);
// }

//=========for-each

/*
data.forEach(function (data, index) {
    console.log(index);
    console.log(data);
});
*/

/*
data.forEach((data, index) => {
    console.log(index);
    console.log(data.name);
});
*/

// data.forEach((data, index) => console.log(data));

//======================filter function
/*
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 20) {
        console.log(arr[i]);
    }
}
*/

/*
const result = arr.filter(function (arr) {
    if (arr >= 20) {
        return true;
    }
});
console.log(result);
*/

/*
const ans = arr.filter((arr) => arr >= 20);
console.log(ans);
*/

/*
const result = data.filter(function (data) {
    if (data.catagory == "build OS") {
        return true;
    }
});
console.log(result);
*/

/*
const result = data.filter((data) => data.start == 1972);
console.log(result);
*/

//===================================map function
/*
const result = data.map(function (data, index) {
    return `${data.name} and ${data.catagory}`;
});
console.log(result);
*/

// data.map((data, index) => console.log(data.catagory, index));
// arr.map((arr, index) => console.log(arr, index));

//===============sort function
/*
const result = data.sort(function (a, b) {
    if (a.start > b.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(result);
*/

/*
const result = data.sort((a, b) => (a.start < b.start ? 1 : -1));
console.log(result);
*/

/*
const ans = arr.sort((a, b) => a - b);
console.log(ans);
*/

//=============================reduce function
/*
sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
*/

// const result = arr.reduce((arr, sum) => arr + sum, 0);
// console.log(result);
