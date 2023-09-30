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

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    progression.push(start + i * step);
  }

  return progression;
}

export function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
