import brainGame from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getQustionAndAnswerGameItems = () => {
  const operandOne = generateNum();
  const operandTwo = generateNum();
  const question = `${operandOne} ${operandTwo}`;

  const getGreatestDivisor = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return getGreatestDivisor(num2, num1 % num2);
  };

  const answerCorrect = getGreatestDivisor(operandOne, operandTwo);

  return [question, answerCorrect];
};

const brainGsdPlay = () => brainGame(description, getQustionAndAnswerGameItems);

export default brainGsdPlay;
