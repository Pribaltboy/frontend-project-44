import readlineSync from 'readline-sync';

const getAnswer = (question) => readlineSync.question(question);

const getName = () => {
  const name = getAnswer('May I have your name? ');
  return name;
};
const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  const result = `Hello, ${name}!`;
  console.log(result);
  return name;
};

export { greet, getAnswer, getName };
