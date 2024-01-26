import playerName from './cli.js';
import getPlayerAnswer from './ask-question.js';

export default (question, rightAnswer, countAnswers) => {
  const playerAnswer = getPlayerAnswer(question);
  if (playerAnswer === rightAnswer) {
    console.log('Correct!');
    if (countAnswers === 3) {
      console.log(`Congratulations, ${playerName}!`);
      return false;
    }
    return true;
  }

  // not right answer
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${playerName}!`);
  return false;
};
