import startGame from '../helpers/index.js';
import randomNumber from '../helpers/get-random-number.js';
import useProgression from '../helpers/use-progression.js';

// progressionMode parameters
const minLen = 5;
const rangeLen = 5;
const maxRandomBetween = 100;
const rule = 'What number is missing in the progression?';

const getProgressionQuestion = () => {
  const progressionLen = randomNumber(rangeLen, minLen);
  const [question, rightAnswer] = useProgression(progressionLen, maxRandomBetween);
  return [question, rightAnswer];
};

startGame(rule, getProgressionQuestion);
