import brainGame from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (num1, num2) => (!num2 ? num1 : getGreatestDivisor(num2, num1 % num2));

const getGameData = () => {
  const operandOne = generateNum(0, 100);
  const operandTwo = generateNum(0, 100);
  const question = `${operandOne} ${operandTwo}`;
  const answerCorrect = `${getGreatestDivisor(operandOne, operandTwo)}`;

  return [question, answerCorrect];
};

export default () => brainGame(description, getGameData);
