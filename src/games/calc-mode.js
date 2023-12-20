import gameLogic from '../game-engine/logic.js';
import randomNumber from '../helpers/get-random-number.js';
import calculate from '../helpers/calculate-result.js';

// calc mode parameters
const maxNumber = 100;
const signs = ['+', '-', '*'];
const maxSign = 2; // [minSign-maxSign]
let countAnswers = 0;
let flag = true;

console.log('What is the result of the expression?');
do {
  const firstNum = randomNumber(maxNumber);
  const sign = signs[randomNumber(maxSign, 0)]; // randomNumber(maxSign, minSign)
  const secondNum = randomNumber(maxNumber);
  const question = `${firstNum} ${sign} ${secondNum}`;
  const rightAnswer = calculate(sign, firstNum, secondNum).toString();
  countAnswers += 1;
  flag = (gameLogic(question, rightAnswer, countAnswers));
} while (flag);
