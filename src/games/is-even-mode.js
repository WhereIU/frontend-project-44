import startGame from '../helpers/index.js';
import randomNumber from '../helpers/get-random-number.js';

// isEvenMode parameters
const maxNumber = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getIsEvenQuestion = () => {
  const question = randomNumber(maxNumber);
  const divisor = 2;
  const rightAnswer = question % divisor ? 'no' : 'yes'; // 1 = no, 0 = yes
  return [question, rightAnswer];
};

startGame(rule, getIsEvenQuestion);
