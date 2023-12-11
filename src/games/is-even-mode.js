import gameLogic from '../game-core/logic.js';
import randomNumber from '../helpers/get-random-number.js';

const maxNumber = 100;
let countAnswers = 0;
let flag = true;

// evenMode parameters

console.log('Answer "yes" if the number is even, otherwise answer "no".');
do {
  const question = randomNumber(maxNumber);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  countAnswers += 1;
  flag = (gameLogic(question, rightAnswer, countAnswers));
} while (flag);
