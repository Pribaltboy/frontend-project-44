export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function add(num1, num2) {
  return num1 + num2;
}

export function substract(num1, num2) {
  return num1 - num2;
}

export function increase(num1, num2) {
  return num1 * num2;
}

export function generateProgression() {
  const progression = [];
  const start = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 10);

  for (let i = 0; i < 10; i++) {
    progression.push(start + i * step);
  }

  return progression;
}
