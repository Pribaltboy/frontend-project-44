#!/usr/bin/env node
import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
  return number % 2 === 0;
}

function playGame() {
  console.log('Welcome to the Brain Games!');
  rl.question('May I have your name? ', (userName) => {
    console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

    let correctAnswers = 0;
    const requiredCorrectAnswers = 2;

    function askQuestion() {
      const randomNumber = generateRandomNumber(1, 100);
      const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

      rl.question(`Question: ${randomNumber}\nYour answer: `, (userAnswer) => {
        if (userAnswer.toLowerCase() === correctAnswer) {
          console.log('Correct!');
          correctAnswers += 1;

          if (correctAnswers > requiredCorrectAnswers) {
            console.log(`Congratulations, ${userName}!`);
            rl.close();
          } else {
            askQuestion();
          }
        } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          rl.close();
        }
      });
    }

    askQuestion();
  });
}

playGame();
