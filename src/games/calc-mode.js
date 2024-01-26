import gameResult from '../helpers/game-result.js';
import randomNumber from '../helpers/get-random-number.js';
import calculate from '../helpers/calculate-expression.js';

// calc mode parameters
const maxNumber = 100;
const signs = ['+', '-', '*'];
const signsLen = signs.length;
let countAnswers = 0;
let flag = true;

console.log('What is the result of the expression?');
do {
  const firstNum = randomNumber(maxNumber);
  const expressionSign = signs[randomNumber(signsLen, 0)];
  // randomNumber(range, minSignNumber)
  const secondNum = randomNumber(maxNumber);
  const question = `${firstNum} ${expressionSign} ${secondNum}`;
  const rightAnswer = calculate(firstNum, expressionSign, secondNum).toString();
  countAnswers += 1;
  flag = (gameResult(question, rightAnswer, countAnswers));
} while (flag);
