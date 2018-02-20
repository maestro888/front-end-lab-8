function getFilteredArray(arr, fn) {
    var newArray = [];

    forEach(arr, function(el) {

        if (fn(el)) {
            newArray.push(el);
        }
    });

    return newArray;
}