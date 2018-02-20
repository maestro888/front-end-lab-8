function getTransformedArray(arr, fn) {
    var newArr = [];

    forEach(arr, function(el) {
        newArr.push(fn(el));
    });

    return newArr;
}