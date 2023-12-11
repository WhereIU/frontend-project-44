import yourName from './meeting-API.js';
import API from './question-API.js';

export default (mainQuestion, rightAnswer, countAnswers) => {
  const yourAnswer = API(mainQuestion);
  if (yourAnswer === rightAnswer) {
    console.log('Correct!');
    if (countAnswers === 3) {
      console.log(`Congratulations, ${yourName}!`);
      return false;
    }
    return true;
  }

  // not right answer

  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${yourName}!`);
  return false;
};
