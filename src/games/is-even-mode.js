import gameLogic from '../game-engine/logic.js';
import randomNumber from '../helpers/get-random-number.js';

// isEvenMode parameters
const maxNumber = 100;
let countAnswers = 0;
let flag = true;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
do {
  const question = randomNumber(maxNumber);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  countAnswers += 1;
  flag = (gameLogic(question, rightAnswer, countAnswers));
} while (flag);
