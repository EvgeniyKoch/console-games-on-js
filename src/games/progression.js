import brainGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateRandomSequence = (sequenceItem, step) => {
  const randomSequence = [];
  let nextSequenceItem = sequenceItem + step;

  for (let i = 0; i < progressionLength; i += 1) {
    nextSequenceItem += step;
    randomSequence.push(nextSequenceItem);
  }
  return randomSequence;
};

const getGameData = () => {
  const itemSequence = generateNum(0, 25);
  const stepSequence = generateNum(1, 5);
  const progression = generateRandomSequence(itemSequence, stepSequence);
  const hiddenElementIndex = generateNum(0, 10);
  const correctAnswer = progression.splice(hiddenElementIndex, 1, '..');
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => brainGame(description, getGameData);
