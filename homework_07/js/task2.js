var range = 5;
var attempt = 1;
var round = 1;
var totalPrize = 0;
var startPrise = 10;
var prize = startPrise;
var endMessage = 'Thank you for a game. Your prize is: ';
var againMessage = 'Dou you want to play again?';
var continueMessage = 'Do you want to continue a game';
var randomNum, myNum, info, message;

message = confirm('Do you want to play a game?');

if (!message) {
    console.log('You did not become a millionaire');
} else {

    outer: for (;round; round++) {
        
        attempt = 1;
        range = range * 2;
        startPrise = startPrise * 3;
        randomNum = Math.floor(Math.random() * (range + 1));
        console.log('Random no '+ randomNum);

        for (;attempt <= 3;) {
            info = 'Enter a number from 0 to ' + range +
                '\nAttempts left: ' + (4 - attempt) +
                '\nTotal prize: ' + totalPrize + '$' +
                '\nPossible prize: ' + prize + '$';

            myNum = prompt(info + '\n\nPlease enter a number', '');

            if (!myNum || myNum.match(/^[0-9]+$/) == null) {
                break outer;
            }

            if (myNum == randomNum) {
                console.log(endMessage + prize + '$');
                totalPrize = totalPrize + prize;

                message = confirm(continueMessage);
                if (message == true) {
                    prize = startPrise;
                    continue outer;
                } else {
                    break outer;
                }
            }

            if (attempt == 3) {
                message = confirm(againMessage);
                if (message == true) {
                    prize = startPrise + totalPrize;
                    continue outer;
                } else {
                    break outer;
                }
            }

            prize = prize / 2;

            attempt++;
        }
    }

    console.log(endMessage + '…');
}
