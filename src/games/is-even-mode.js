import gameResult from '../helpers/gameResult.js';
import randomNumber from '../helpers/get-random-number.js';
import getRemainder from '../helpers/get-remainder.js';

// isEvenMode parameters
const maxNumber = 100;
let countAnswers = 0;
let flag = true;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
do {
  const question = randomNumber(maxNumber);
  const divisor = 2;
  const rightAnswer = getRemainder(question, divisor) ? 'no' : 'yes'; // 1 = no, 0 = yes
  countAnswers += 1;
  flag = (gameResult(question, rightAnswer, countAnswers));
} while (flag);
