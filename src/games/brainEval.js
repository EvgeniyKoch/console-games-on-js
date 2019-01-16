import { intro, nameRequest, randomNumber, question, brainGame } from './gameEngine';

const attempts = 3;
intro('Answer "yes" if number even otherwise answer "no"');
const name = nameRequest();

const brainEvenPlay = (attempt) => {
  if (attempt === 0) {
    console.log(`Congratulations, ${name} !!`);
    return;
  }
  const questionNumber = randomNumber();
  const answer = question(questionNumber);
  const answerCorrect = questionNumber % 2 === 0 ? 'yes' : 'no';
  brainGame(name, answer, answerCorrect);
  brainEvenPlay(attempt - 1);
};

brainEvenPlay(attempts);


export default brainEvenPlay;
