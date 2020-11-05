let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

const compareGuesses = (human, computer, target) => {
  const userG = Math.abs(target - human);
  const computerG = Math.abs(target - computer);
  if (userG === computerG || userG < computerG) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore ++;
  } else if (winner === 'computer') {
    computerScore ++;
  }
}

const advanceRound = () => {
  currentRoundNumber ++;
}