import brainGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';

const generateRandomSequence = () => {
  const randomSequence = [];
  const numSequence = generateNum(0, 25);
  const stepSequence = generateNum(1, 5);

  let progressionLength = 10;
  let num = numSequence + stepSequence;

  while (progressionLength) {
    num += stepSequence;
    randomSequence.push(num);
    progressionLength -= 1;
  }
  return randomSequence;
};

const getDataGame = () => {
  const progression = generateRandomSequence();
  const randomIndex = generateNum(0, 10);
  const answerCorrect = progression.splice(randomIndex, 1, '..');
  const question = progression.join(' ');

  return [question, answerCorrect];
};

export default () => brainGame(description, getDataGame);
