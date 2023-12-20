export default (number) => {
  const firstHalfNumbers = number / 2;
  for (let i = 2; i <= firstHalfNumbers; i += 1) {
    if (number / i === Math.floor(number / i)) {
      return false;
    }
  }
  return true;
};
