import startGame from '../helpers/index.js';
import randomNumber from '../helpers/get-random-number.js';
import calculate from '../helpers/calculate-expression.js';

// calc mode parameters
const maxNumber = 100;
const signs = ['+', '-', '*'];
const signsLen = signs.length;
const rule = 'What is the result of the expression?';

const getCalcQuestion = () => {
  const firstNum = randomNumber(maxNumber);
  const expressionSign = signs[randomNumber(signsLen, 0)];
  // randomNumber(range, minSignNumber)
  const secondNum = randomNumber(maxNumber);
  const question = `${firstNum} ${expressionSign} ${secondNum}`;
  const rightAnswer = calculate(firstNum, expressionSign, secondNum).toString();
  return [question, rightAnswer];
};

startGame(rule, getCalcQuestion);
