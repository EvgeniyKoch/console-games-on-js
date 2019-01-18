import brainGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';
const firstItemSequence = generateNum(0, 25);
const stepSequence = generateNum(1, 5);

const generateRandomSequence = (firstItem, step) => {
  const randomSequence = [];
  const progressionLength = 10;
  let nextItem = firstItem + step;

  for (let i = 0; i <= progressionLength; i += 1) {
    nextItem += step;
    randomSequence.push(nextItem);
  }
  return randomSequence;
};

const getGameData = () => {
  const progression = generateRandomSequence(firstItemSequence, stepSequence);
  const hiddenElementIndex = generateNum(0, 10);
  const correctAnswer = progression.splice(hiddenElementIndex, 1, '..');
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => brainGame(description, getGameData);
