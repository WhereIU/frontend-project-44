export default (firstNum, secondNum) => {
  if (firstNum === secondNum) {
    return firstNum;
  }

  const numbers = []; // going to be [min, max]
  if (firstNum < secondNum) {
    numbers.push(firstNum);
    numbers.push(secondNum);
  } else {
    numbers.push(secondNum);
    numbers.push(firstNum);
  }

  if (numbers[1] % numbers[0] === 0) {
    return numbers[0]; // minNum is gcd of maxNum
  }

  let possibleDivisor = Math.floor(numbers[0] / 2); // in first half of minNum
  for (const minCheck = 2; possibleDivisor >= minCheck; possibleDivisor -= 1) {
    // gcd should be in range 2 <= minNum/2 of check
    if (numbers[0] % possibleDivisor === 0 && numbers[1] % possibleDivisor === 0) {
      return possibleDivisor;
    }
  }
  return 1; // gcd is the lowest = 1;
};
