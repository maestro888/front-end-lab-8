function collectIds(arr) {

    var newArr = getFilteredArray(arr, function(el) {
        return el.rating > 3;
    });

    return getTransformedArray(newArr, function(el) {
        return el.id;
    });
}