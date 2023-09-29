#!/usr/bin/env node;
import * as readline from 'node:readline';
import { generateRandomNumber } from '../src/cli.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  console.log('Welcome to the Brain Games!');
  rl.question('May I have your name? ', (userName) => {
    console.log(`Hello, ${userName}!\nFind the greatest common divisor of given numbers.`);
    let correctAnswers = 0;
    const requiredCorrectAnswers = 3;

    function gcd(a, b) {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    }

    function askQuestion() {
      const num1 = generateRandomNumber(0, 100);
      const num2 = generateRandomNumber(0, 100);
      const exprQuestion = `${num1} ${num2}`;
      const correctAnswer = gcd(num1, num2).toString();
      console.log(`Question: ${exprQuestion}`);
      rl.question('Your answer: ', (userAnswer) => {
        if (userAnswer === correctAnswer) {
          console.log('Correct!');
          correctAnswers += 1;
          if (correctAnswers >= requiredCorrectAnswers) {
            console.log(`Congratulations, ${userName}`);
            rl.close();
          } else {
            askQuestion();
          }
        } else {
          console.log(`${userAnswer} This answer is wrong :( This is right ${correctAnswer}`);
          console.log('Lets try again!');
          rl.close();
        }
      });
    }

    askQuestion();
  });
}

playGame();
