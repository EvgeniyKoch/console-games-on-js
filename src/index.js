import readlineSync from 'readline-sync';


const attempts = 3;

// brain-games
export const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

// brain-even
export const questionGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const attemt = (num) => {
    if (num === 0) {
      console.log(`Congratulations, ${name} !!`);
      return;
    }

    const questionNumber = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${questionNumber} `);
    const tryAgain = `Let's try again, ${name}!`;
    const answerCorrect = questionNumber % 2 === 0 ? 'yes' : 'no';
    const correctAnswerYes = `"${answer}" is wrong answer ;(. Correct answer was "${answerCorrect}".`;


    if (answerCorrect === answer) {
      console.log('Correct!!');
    } else {
      console.log(correctAnswerYes);
      console.log(tryAgain);
      return;
    }

    attemt(num - 1);
  };

  attemt(attempts);
};

// brain-calc
