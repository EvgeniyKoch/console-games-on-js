import brainGame from '..';
import generateNum from '../utils';

const isEven = value => value % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no"';

const getGameData = () => {
  const question = generateNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => brainGame(description, getGameData);
