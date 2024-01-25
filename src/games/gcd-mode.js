import gameResult from '../helpers/gameResult.js';
import randomNumber from '../helpers/get-random-number.js';
import getGcd from '../helpers/get-gcd.js';

// gcd mode parameters
const maxNumber = 100;
let countAnswers = 0;
let flag = true;

console.log('Find the greatest common divisor of given numbers.');
do {
  const firstNum = randomNumber(maxNumber);
  const secondNum = randomNumber(maxNumber);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = getGcd(firstNum, secondNum).toString();
  countAnswers += 1;
  flag = (gameResult(question, rightAnswer, countAnswers));
} while (flag);
