import brainGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no"';
const randomValue = () => Math.floor(Math.random() * 100);
const funcCorrectAnswer = value => (value % 2 === 0 ? 'yes' : 'no');
const brainEvenPlay = () => brainGame(description, funcCorrectAnswer, randomValue);

export default brainEvenPlay;
