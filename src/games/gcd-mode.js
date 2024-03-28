import startGame from '../helpers/index.js';
import randomNumber from '../helpers/get-random-number.js';
import getGcd from '../helpers/get-gcd.js';

// gcd mode parameters
const maxNumber = 100;
const rule = 'Find the greatest common divisor of given numbers.';

const getGcdQuestion = () => {
  const firstNum = randomNumber(maxNumber);
  const secondNum = randomNumber(maxNumber);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = getGcd(firstNum, secondNum).toString();
  return [question, rightAnswer];
};

startGame(rule, getGcdQuestion);
