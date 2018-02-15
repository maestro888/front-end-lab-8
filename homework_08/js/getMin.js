function getMin(a, b, c) {
    var arr = [a, b, c];

    arr.sort(function(x, y) {
        return x - y;
    });

    return arr[0];
}