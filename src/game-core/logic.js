import userName from './meet-user.js';
import getAnswer from './ask-question.js';

export default (mainQuestion, rightAnswer, countAnswers) => {
  const userAnswer = getAnswer(mainQuestion);
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    if (countAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }
    return true;
  }

  // not right answer

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};
