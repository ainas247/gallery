let num = [1, 2, 3, 4, 5, 6];
num.reduce(function (arr, curr) {
    console.log(curr);
    arr = arr + curr;
    console.log(arr);

},0)