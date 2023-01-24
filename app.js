function rockPaperScissors(playTurn) {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    if (playTurn == 'r' || playTurn == 'rock') {
        playTurn = rock;
    } else if (playTurn == 'p' || playTurn == 'paper') {
        playTurn = paper;
    } else if (playTurn == 's' || playTurn == 'scissors') {
        playTurn = scissors;
    } else {
        console.log('Invalid input. Please try again...');
    }

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerMove = '';

    switch (computerRandomNumber) {
        case 1: computerMove = 'Rock'; break;
        case 2: computerMove = 'Paper'; break;
        case 3: computerMove = 'Scissors'; break;
    }
}