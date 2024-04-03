import startGame from '../index.js';
import randomNumber from '../helpers/get-random-number.js';
import isPrime from '../helpers/is-prime.js';

// isPrimeMode parameters
const maxNumber = 100;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getIsPrimeQuestion = () => {
  const question = randomNumber(maxNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

startGame(rule, getIsPrimeQuestion);
