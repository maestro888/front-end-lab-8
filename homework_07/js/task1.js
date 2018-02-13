var i = 0, j = 0;
var rows = prompt('Please enter natural number N (0 < N <= 20) ', '');

if (rows == 0 || rows > 20 || rows.match(/^[0-9]+$/) == null) {
    console.log('Incorrect data');
} else {

    while (i < rows) {
        var tab = '';
        var txt = '';

        for (j = 0; j < rows - i - 1; j++) {
            tab += '   ';
        }

        for (j = 0; j < 2 * i + 1; j++) {
            txt += '[~]';
        }

        console.log(tab + txt);
        i++;
    }

    console.log('Pyramid with ' + rows + ' floors (N = ' + rows + ')');
}
