import gameResult from '../helpers/gameResult.js';
import randomNumber from '../helpers/get-random-number.js';
import isPrime from '../helpers/is-prime.js';

// isPrimeMode parameters
const maxNumber = 100;
let countAnswers = 0;
let flag = true;

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
do {
  const question = randomNumber(maxNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  countAnswers += 1;
  flag = (gameResult(question, rightAnswer, countAnswers));
} while (flag);
