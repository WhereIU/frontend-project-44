#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { yourName } from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let rigthAnswers = 0;
const maxNumber = 100;
while (rigthAnswers < 3) {
  const number = Math.floor(Math.random() * maxNumber);
  console.log(`Question: ${number}`);
  const yourAnswer = readlineSync.question('Your answer: ');
  const isEven = number % 2 === 0 ? 'yes' : 'no';
  if ((isEven === 'yes' && yourAnswer === 'yes') || (isEven === 'no' && yourAnswer === 'no')) {
    console.log('Correct!');
    rigthAnswers += 1;
  } else {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
    console.log(`Let's try again, ${yourName}!`);
    break;
  }
}
if (rigthAnswers === 3) {
  console.log(`Congratulations, ${yourName}!`);
}
