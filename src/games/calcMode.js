import brainLogic from '../core/brain-LOGIC.js';
import randomNumber from '../core/randomNumber.js';
import calculate from '../core/calculate.js';

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
