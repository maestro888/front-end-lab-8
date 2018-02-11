var eurToUah = 33.2324; // 1 eur = 33.2324 uah
var usdToUah = 27.1240; // 1 usd = 27.1240 uah
var eurToUsd = Math.round(eurToUah / usdToUah * 100) / 100;

var eurQty = parseFloat(prompt('EUR', ''));
var usdQty = parseFloat(prompt('USD', ''));

if (eurQty < 1 || usdQty < 1 || isNaN(eurQty) || isNaN(usdQty)) {
    console.log('Incorrect data');
} else {
    eurToUah = Math.round(eurQty * eurToUah * 100) / 100;
    usdToUah = Math.round(usdQty * usdToUah * 100) / 100;
    console.log(
        eurQty + ' euros are equal ' + eurToUah + ' UAH, ' +
        usdQty + ' dollars are equal ' + usdToUah + ' UAH, ' +
        'one euro is equal ' + eurToUsd + ' USD'
    );
}