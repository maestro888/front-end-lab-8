function getClosestToZero(a, b, c, d) {
    var arr = [a, b, c, d];

    arr.sort(function(x, y) {
        return Math.abs(x) > Math.abs(y) ? 1 : -1;
    });

    return arr[0];
}