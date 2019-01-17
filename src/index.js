import readlineSync from 'readline-sync';

const attempts = 3;

const brainGame = (descript, data) => {
  console.log('Welcome to the Brain Games!');
  console.log(descript);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const iter = (attempt) => {
    if (attempt === 0) {
      console.log(`Congratulations, ${name} !!`);
      return;
    }
    const dataItems = data();
    const questionGame = dataItems[0];
    console.log(`Question: ${questionGame} `);

    const answerCorrect = dataItems[1];
    const answer = readlineSync.question('Your answer: ');

    if (String(answerCorrect) !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerCorrect}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!!');

    iter(attempt - 1);
  };
  return iter(attempts);
};

export default brainGame;
