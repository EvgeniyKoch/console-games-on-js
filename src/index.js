import readlineSync from 'readline-sync';

export const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const questionGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const attempts = 3;

  const attemt = (num) => {
    if (num === 0) {
      return console.log(`Congratulations, ${name} !!`);
    }

    const randomNumber = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${randomNumber} `);
    const correctAnswerNo = `"${answer}" is wrong answer ;(. Correct answer was "no".`;
    const correctAnswerYes = `"${answer}" is wrong answer ;(. Correct answer was "yes".`;

    if (randomNumber % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
      console.log(correctAnswerNo);
      return console.log(`Let's try again, ${name}!`);
    } else if (randomNumber % 2 === 0 && answer !== 'yes') {
      return console.log(correctAnswerYes);
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log(correctAnswerYes);
      return console.log(`Let's try again, ${name}!`);
    } else if (randomNumber % 2 !== 0 && answer !== 'no') {
      return console.log(correctAnswerNo);
    }
    return attemt(num - 1);
  };

  return attemt(attempts);
};
