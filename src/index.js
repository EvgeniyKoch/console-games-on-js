import readlineSync from 'readline-sync';

const attempts = 3;

const brainGame = (descript, funcCorrectAnswer, question) => {
  console.log('Welcome to the Brain Games!');
  console.log(descript);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const iter = (attempt) => {
    if (attempt === 0) {
      console.log('Correct!!');
      console.log(`Congratulations, ${name} !!`);
      return;
    }
    const questionGame = question();
    console.log(`Question: ${questionGame} `);

    const answerCorrect = funcCorrectAnswer(questionGame);
    const answer = readlineSync.question('Your answer: ');

    console.log(typeof answer, 'typeof answer');
    console.log(typeof answerCorrect, 'typeof answerCorrect');

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
