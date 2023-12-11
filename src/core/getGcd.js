export default (firstNum, secondNum) => {
  if (firstNum === secondNum) {
    return firstNum;
  }

  const numbers = [];
  if (firstNum < secondNum) {
    numbers.push(firstNum);
    numbers.push(secondNum);
  } else {
    numbers.push(secondNum);
    numbers.push(firstNum);
  }

  if (numbers[1] % numbers[0] === 0) {
    return numbers[0];
  }

  for (let i = Math.floor(numbers[0] / 2); i > 0; i -= 1) {
    if (numbers[0] % i === 0 && numbers[1] % i === 0) {
      return i;
    }
  }
  return 1;
};
