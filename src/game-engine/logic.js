import userName from './meet-user.js';
import getUserAnswer from './ask-question.js';

export default (question, rightAnswer, countAnswers) => {
  const userAnswer = getUserAnswer(question);
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
