import randomNumber from './get-random-number.js';

export default (progressionLen, randomLen) => {
  const progression = [];
  const firstNum = randomNumber(randomLen);
  const step = randomNumber(randomLen);
  const hidenIndex = randomNumber(progressionLen - 1); // index=-1
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
