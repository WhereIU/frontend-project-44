import randomNumber from './get-random-number.js';

export default (progressionLen, maxNumber) => {
  const progression = [];
  const firstNum = randomNumber(maxNumber);
  const step = randomNumber(maxNumber);
  const hidenIndex = randomNumber(progressionLen);
  let hidenNum;
  for (let i = 0; i <= progressionLen; i += 1) {
    if (i !== hidenIndex) {
      progression.push(firstNum + step * i);
    } else {
      hidenNum = firstNum + step * i;
      progression.push('..');
    }
  }
  return [progression.join(' '), hidenNum.toString()];
};
