import brainGame from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const getQustionAndAnswerGameItems = () => {
  const question = generateNum();
  const isEven = value => value % 2 === 0;
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEvenPlay = () => brainGame(description, getQustionAndAnswerGameItems);

export default brainEvenPlay;
