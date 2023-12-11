import gameLogic from '../game-core/logic.js';
import randomNumber from '../helpers/get-random-number.js';
import gcd from '../helpers/get-gcd.js';

const maxNumber = 100;
let countAnswers = 0;
let flag = true;

// gcdMode parameters

console.log('What is the result of the expression?');
do {
  const firstNum = randomNumber(maxNumber);
  const secondNum = randomNumber(maxNumber);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = gcd(firstNum, secondNum).toString();
  countAnswers += 1;
  flag = (gameLogic(question, rightAnswer, countAnswers));
} while (flag);
