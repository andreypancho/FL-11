let startGame = confirm('Do you want to play a game?');
let totalPrize = 0;

if (startGame) {
    let maxRandomNumber = 5;
    let maxPrizeForTheTry = 0;
    let prizeForTheTry = 0;

    while (startGame) {
        maxRandomNumber += 4;
        maxPrizeForTheTry += 100;

        let numberWin = Math.floor(Math.random() * maxRandomNumber);
        console.log(numberWin);

        for (let i = 3; i > 0; i--) {
            // debugger;
            if (i === 3) {
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
                    console.log(nextGame);
                    break;
                } else {
                    alert(
                        `Thank you for your participation. Your prize is: ${totalPrize} $`
                    );
                    startGame = false;
                    break;
                }
            } else {
                if (i === 1) {
                    startGame = false;
                    alert(
                        `Thank you for your participation. Your prize is: ${totalPrize} $`
                    );
                }
                prizeForTheTry /= 2;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}