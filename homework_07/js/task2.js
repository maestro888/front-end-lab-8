var range = 5;
var randomNum = 0;
var attempt = 0;
var round = 1;
var startPrize = 10;
var prize = 10;
var message;
var startMessage = 'Do you want to play a game?';
var endMessage = 'Thank you for a game. Your prize is: ';
var againMessage = 'Dou you want to play again?';
var info, myNum;
var currentPrize;

randomNum = Math.floor(Math.random() * (range + 1));
console.log('Random no '+ randomNum);

while (attempt < 3) {
    console.log(prize);
    console.log(attempt + 1);
    info = 'Attempts left: ' + (attempt + 1) + '\n' + 'Total prize: ' + prize + '$\n' + 'Possible prize: ' + prize / (attempt + 1) + '$';
    myNum = prompt(info + '\n\nPlease enter a number', '');

    if (myNum == null) {
        break;
    }

    if (myNum == randomNum) {
        prize = prize / (attempt + 1);
        console.log(endMessage + prize + '$');
        break;
    }

    attempt++;
}

message = confirm(againMessage);

if (message == true) {
    startPrize = startPrize * 3;
    range = range * 2;
    randomNum = Math.floor(Math.random() * (range + 1));

    attempt = 0;
    while (attempt < 3) {
        info = 'Attempts left: ' + (attempt + 1) + '\n' + 'Total prize: ' + prize + '$\n' + 'Possible prize: ' + prize / (attempt + 1) + '$';
        myNum = prompt(info + '\n\nPlease enter a number', '');

        if (myNum == null) {
            break;
        }

        if (myNum == randomNum) {
            prize = prize / (attempt + 1);
            console.log(endMessage + prize + '$');
            break;
        }

        attempt++;
    }

} else {
    console.log(endMessage + '…');
}

