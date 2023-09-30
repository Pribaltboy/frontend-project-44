#!/usr/bin/env node
import * as readline from 'node:readline';
import { generateRandomNumber, isPrime } from '../src/cli.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  console.log('Welcome to the Brain Games!');
  rl.question('May I have your name? ', (userName) => {
    console.log(`Hello, ${userName}!\n`);
    console.log('Answer "yes" if given number is prime. Otherwise, answer "no".\n');

    let correctAnswers = 0;
    const requiredCorrectAnswers = 3;

    function askQuestion() {
      const number = generateRandomNumber(1, 100);
      rl.question(`Question: ${number}\nYour answer: `, (userAnswer) => {
        const isCorrect = (isPrime(number) && userAnswer.toLowerCase() === 'yes') || (!isPrime(number) && userAnswer.toLowerCase() === 'no');

        if (isCorrect) {
          console.log('Correct!');
          correctAnswers += 1;

          if (correctAnswers >= requiredCorrectAnswers) {
            console.log(`Congratulations, ${userName}!`);
            rl.close();
          } else {
            askQuestion();
          }
        } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isCorrect ? 'yes' : 'no'}'.`);
          console.log(`Let's try again, ${userName}!`);
          rl.close();
        }
      });
    }
    askQuestion();
  });
}

playGame();
