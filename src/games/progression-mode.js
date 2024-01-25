import gameLogic from '../game-engine/logic.js';
import randomNumber from '../helpers/get-random-number.js';
import useProgression from '../helpers/useProgression.js';

// progressionMode parameters
const minLen = 5;
const rangeLen = 5;
const maxRandomBetween = 100;
let countAnswers = 0;
let flag = true;

console.log('What number is missing in the progression?');
do {
  const progressionLen = randomNumber(rangeLen, minLen);
  const [question, rightAnswer] = useProgression(progressionLen, maxRandomBetween);
  countAnswers += 1;
  flag = (gameLogic(question, rightAnswer, countAnswers));
} while (flag);
