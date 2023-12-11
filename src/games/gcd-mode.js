import brainLogic from '../core/main-logic.js';
import randomNumber from '../core/getRandomNumber.js';
import gcd from '../core/getGcd.js';

const maxNumber = 100;
let countAnswers = 0;
let flag = true;
let rightAnswer = 0;

// gcdMode parameters

console.log('What is the result of the expression?');
do {
  const firstNum = randomNumber(maxNumber);
  const secondNum = randomNumber(maxNumber);
  const question = `${firstNum} ${secondNum}`;
  rightAnswer = gcd(firstNum, secondNum).toString();
  countAnswers += 1;
  flag = (brainLogic(question, rightAnswer, countAnswers));
} while (flag);
