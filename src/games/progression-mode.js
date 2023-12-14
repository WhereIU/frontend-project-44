import gameLogic from '../game-core/logic.js';
import randomNumber from '../helpers/get-random-number.js';
import getProgression from '../helpers/progression.js';

const minProgressionNum = 5;
const countProgressonNum = 5;
const randomLen = 100;
let countAnswers = 0;
let flag = true;

// progressionMode parameters

console.log('What is the result of the expression?');
do {
  const progressionLen = randomNumber(countProgressonNum, minProgressionNum);
  const [question, rightAnswer] = getProgression(progressionLen, randomLen);
  countAnswers += 1;
  flag = (gameLogic(question, rightAnswer, countAnswers));
} while (flag);
