import gameLogic from '../game-core/logic.js';
import randomNumber from '../helpers/get-random-number.js';
import calculate from '../helpers/get-сalc-result.js';

const maxNumber = 100;
const maxSign = 2;
let countAnswers = 0;
let flag = true;
const signs = ['+', '-', '*'];

// calcMode parameters

console.log('What is the result of the expression?');
do {
  const firstNum = randomNumber(maxNumber);
  const sign = signs[randomNumber(maxSign)];
  const secondNum = randomNumber(maxNumber);
  const question = `${firstNum} ${sign} ${secondNum}`;
  const rightAnswer = calculate(sign, firstNum, secondNum).toString();
  countAnswers += 1;
  flag = (gameLogic(question, rightAnswer, countAnswers));
} while (flag);
