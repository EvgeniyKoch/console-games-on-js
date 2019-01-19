import brainGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameData = () => {
  const progression = [];
  const first = generateNum(1, 9);
  const step = generateNum(1, 5);

  for (let i = 0; i < progressionLength; i += 1) {
    const nextSequenceItem = first + step * i;
    progression.push(nextSequenceItem);
  }

  const hiddenElementIndex = generateNum(0, progressionLength - 1);
  const correctAnswer = `${progression[hiddenElementIndex]}`;
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => brainGame(description, getGameData);
