export default (number) => {
  if (number < 2) {
    return false;
  }
  const halfOfNumber = Math.floor(number / 2);
  for (let divider = 2; divider <= halfOfNumber; divider += 1) {
    if (number / divider === Math.floor(number / divider)) {
      return false;
    }
  }
  return true;
};
