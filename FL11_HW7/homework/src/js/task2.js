const startConstRandomNumber = 5;
const maxRandomNumberStep = 4;
const maxPrizeForTheTryStep = 100;
const prizeDecreasesWhenTheError = 2;
const maxAttempts = 3;

let startGame = confirm('Do you want to play a game?');
let totalPrize = 0;

if (startGame) {
    let maxRandomNumber = startConstRandomNumber;
    let maxPrizeForTheTry = 0;
    let prizeForTheTry = 0;

    while (startGame) {
        maxRandomNumber += maxRandomNumberStep;
        maxPrizeForTheTry += maxPrizeForTheTryStep;

        let numberWin = Math.floor(Math.random() * maxRandomNumber);

        for (let i = maxAttempts; i > 0; i--) {
            if (i === maxAttempts) {
                prizeForTheTry = maxPrizeForTheTry;
            }

            let mainQuestion = `Choose a roulette pocket number from 0 to ${maxRandomNumber -
                1}\n`;
            mainQuestion += `Attempts left: ${i}\n`;
            mainQuestion += `Total prize: ${totalPrize}\n`;
            mainQuestion += `Possible prize on current attempt: ${prizeForTheTry}`;

            let firstAttempt = prompt(mainQuestion);
            if (+firstAttempt === numberWin) {
                let nextGame = confirm(
                    `Congratulation, you won! Your prize is: ${prizeForTheTry} $. Do you want to continue?`
                );
                if (nextGame) {
                    startGame = nextGame;
                    totalPrize += prizeForTheTry;
                    break;
                } else {
                    totalPrize += prizeForTheTry;
                    alert(
                        `Thank you for your participation. Your prize is: ${totalPrize} $`
                    );
                    let nextGame = confirm(
                        `Play again?`
                    );

                    if (nextGame) {
                        startGame = nextGame;
                        maxRandomNumber = startConstRandomNumber;
                        maxPrizeForTheTry = 0;
                        prizeForTheTry = 0;
                    } else {
                        startGame = false;
                    }
                    break;
                }
            } else {
                if (i === 1) {
                    alert(
                        `Thank you for your participation. Your prize is: ${totalPrize} $`
                    );
                    let nextGame = confirm(
                        `Play again?`
                    );

                    if (nextGame) {
                        startGame = nextGame;
                        maxRandomNumber = startConstRandomNumber;
                        maxPrizeForTheTry = 0;
                        prizeForTheTry = 0;
                        totalPrize = 0;
                    } else {
                        startGame = false;
                    }

                }
                prizeForTheTry /= prizeDecreasesWhenTheError;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}