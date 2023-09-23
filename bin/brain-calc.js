#!/usr/bin/env node
import * as readline from 'node:readline';
import { add, substract, increase, generateRandomNumber } from '../src/cli.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  console.log('Welcome to the Brain Games!');
  rl.question('May I have your name? ', (userName) => {
    console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);

    let correctAnswers = 0;
    const requiredCorrectAnswers = 3;

    function askQuestion() {
      const num1 = generateRandomNumber(1, 10);
      const num2 = generateRandomNumber(1, 10);
      const operators = ['+', '-', '*'];
      const operator = operators[generateRandomNumber(0, operators.length - 1)];
      const expression = `${num1} ${operator} ${num2}`;
      const operations = {
        '+': add,
        '-': substract,
        '*': increase,
      };

      const correctAnswer = operations[operator](num1, num2).toString();

      console.log(`Question: ${expression}`);
      rl.question('Your answer:', (userAnswer) => {
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
          askQuestion();
        }
      });
    }

    askQuestion();
  });
}

playGame();
