function rockPaperScissors(playerMove) {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    console.log('Choose [r]ock, [p]aper or [s]cissors: ');

    if (playerMove == 'r' || playerMove == 'rock') {
        playerMove = rock;
    } else if (playerMove == 'p' || playerMove == 'paper') {
        playerMove = paper;
    } else if (playerMove == 's' || playerMove == 'scissors') {
        playerMove = scissors;
    } else {
        console.log('Invalid input. Please try again...');
    }

    console.log(`Your choice: ${playerMove}`);

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerMove;

    switch (computerRandomNumber) {
        case 1: computerMove = rock; break;
        case 2: computerMove = paper; break;
        case 3: computerMove = scissors; break;
    }

    console.log(`The computer chooses: ${computerMove}`);

    if ((playerMove == rock && computerMove == scissors) ||
        (playerMove == paper && computerMove == rock) ||
        (playerMove == scissors && computerMove == paper)) {
        console.log('You win!');
    } else if ((playerMove == rock && computerMove == paper) ||
        (playerMove == paper && computerMove == scissors) ||
        (playerMove == scissors && computerMove == rock)) {
        console.log('You lose!');
    } else {
        console.log('This game was a draw!');
    }

}
rockPaperScissors('scissors');