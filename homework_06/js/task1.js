var a, b, c, alpha, beta, gamma, type, sq;

a = parseFloat(prompt('a', ''));
b = parseFloat(prompt('b', ''));
c = parseFloat(prompt('c', ''));

if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Incorrect data');
} else {

    if (a >= b + c || b >= a + c || c >= a + b) {
        console.log('From the segments of such length it is impossible to form a triangle');
    } else {
        alpha = Math.round(Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)) * (180 / Math.PI) * 100) / 100;
        beta = Math.round(Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c)) * (180 / Math.PI) * 100) / 100;
        gamma = Math.round((180 - (alpha + beta)) * 100) / 100;

        if (alpha == 60) {
            type = 'Equilateral triangle';
        } else if (alpha == 90 || beta == 90 || gamma == 90) {
            type = 'Right triangle';
        } else if (alpha == beta || beta == gamma || gamma == alpha) {
            type = 'Isosceles triangle';
        } else {
            type = 'Scalene triangle';
        }

        sq = Math.round(1 / 4 * Math.sqrt((a + b - c) * (a - b + c) * (- a + b + c) * (a + b + c)) * 100) / 100;

        console.log('Type of triangle is ' + type + ' and square is ' + sq);
    }
}