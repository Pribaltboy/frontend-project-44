#!/usr/bin/env node
import readline from 'readline';
import { generateRandomNumber, generateProgression } from '../src/cli.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  console.log('Welcome to the Brain Games!');
  rl.question('May I have your name? ', (userName) => {
    console.log(`Hello, ${userName}!\nWhat number is missing in the progression?`);
    let correctAnswers = 0;
    const requiredCorrectAnswers = 3;

    function askQuestion() {
      if (correctAnswers >= requiredCorrectAnswers) {
        console.log(`Congratulations, ${userName}!`);
        rl.close();
        return;
      }

      const progression = generateProgression();
      const hiddenIndex = generateRandomNumber(0, 9);
      const correctAnswer = progression[hiddenIndex];

      progression[hiddenIndex] = '..';

      console.log(`Question: ${progression.join(' ')}`);
      rl.question('Your answer: ', (userAnswer) => {
        const userAnswerAsNumber = parseInt(userAnswer, 10);
        if (userAnswerAsNumber === correctAnswer) {
          console.log('Correct!');
          correctAnswers += 1;
        } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          rl.close();
          return;
        }

        askQuestion();
      });
    }

    askQuestion();
  });
}

playGame();
