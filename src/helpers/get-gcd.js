export default (firstNum, secondNum) => {
  if (firstNum === secondNum) {
    return firstNum;
  }

  const numbers = []; // [min, max]
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

  const firstHalfNumbers = numbers[0] / 2;
  for (let i = 2; i <= firstHalfNumbers; i += 1) { // gcd should be in range 2 <= minNum/2
    if (numbers[0] % i === 0 && numbers[1] % i === 0) {
      return i;
    }
  }
  return 1; // gcs of both is 1
};
