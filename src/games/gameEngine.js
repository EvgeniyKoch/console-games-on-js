import readlineSync from 'readline-sync';

export const intro = (descript) => {
  console.log('Welcome to the Brain Games!');
  console.log(descript);
};

export const nameRequest = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const randomNumber = () => Math.floor(Math.random() * 100);
export const question = val => readlineSync.question(`Question: ${val} `);
export const questionAnswer = () => readlineSync.question('Your answer: ');
export const isEven = num => num % 2 === 0;
export const attempts = 3;

export const brainGame = (name, answer, answerCorrect) => {
  if (answerCorrect !== answer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerCorrect}".`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log('Correct!!');
};
