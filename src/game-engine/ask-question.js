import readlineSync from 'readline-sync';

export default (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};
