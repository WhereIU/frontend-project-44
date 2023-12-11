import brainLogic from '../core/main-logic.js';
import randomNumber from '../core/getRandomNumber.js';
import calculate from '../core/getCalc-result.js';

const maxNumber = 100;
const maxSign = 3;
let countAnswers = 0;
let flag = true;
const signs = ['+', '-', '*'];
let rightAnswer = 0;

// calcMode parameters

console.log('What is the result of the expression?');
do {
  const firstNum = randomNumber(maxNumber);
  const sign = signs[randomNumber(maxSign)];
  const secondNum = randomNumber(maxNumber);
  const question = `${firstNum} ${sign} ${secondNum}`;
  rightAnswer = calculate(sign, firstNum, secondNum).toString();
  countAnswers += 1;
  flag = (brainLogic(question, rightAnswer, countAnswers));
} while (flag);
