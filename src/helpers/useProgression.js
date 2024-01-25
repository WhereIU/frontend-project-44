import randomNumber from './get-random-number.js';

export default (progressionLen, maxRandomBetween) => {
  const progression = [];
  const firstNum = randomNumber(maxRandomBetween);
  const step = randomNumber(maxRandomBetween);
  const hidenIndex = randomNumber(progressionLen - 1); // index-=1
  let hidenNum;
  for (let i = 0; i < progressionLen; i += 1) {
    if (i !== hidenIndex) {
      progression.push(firstNum + step * i);
    } else {
      hidenNum = firstNum + step * i;
      progression.push('..');
    }
  }
  return [progression.join(' '), hidenNum.toString()];
};
