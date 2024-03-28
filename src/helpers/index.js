import readlineSync from 'readline-sync';
import playerName from './cli.js';

let countAnswers = 0;
export default (rule, getRoundValues) => {
  console.log(rule);

  while (true) {
    const [question, rightAnswer] = getRoundValues();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }

    countAnswers += 1;
    if (countAnswers === 3) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }
  }
};
