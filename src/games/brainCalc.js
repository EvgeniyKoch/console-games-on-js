import brainGame from '..';
import generateNum from '../utils';

const description = 'What is the result of the expression?';

const getQustionAndAnswerGameItems = () => {
  let operandOne = 0;
  let operandTwo = 0;
  let plus;
  let minus;
  let multiply;

  const randomValue = () => {
    operandOne = generateNum();
    operandTwo = generateNum();
    plus = `${operandOne} + ${operandTwo}`;
    minus = `${operandOne} - ${operandTwo}`;
    multiply = `${operandOne} * ${operandTwo}`;
    const operations = [plus, multiply, minus];

    const generateOperator = (min, max, operationsArr) => {
      const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      return operationsArr[randomIndex];
    };
    return generateOperator(0, operations.length - 1, operations);
  };

  const getDataGame = () => {
    let answerCorrect = 0;
    const operations = randomValue();
    switch (operations) {
      case plus:
        answerCorrect = operandOne + operandTwo;
        break;
      case minus:
        answerCorrect = operandOne - operandTwo;
        break;
      case multiply:
        answerCorrect = operandOne * operandTwo;
        break;
      default:
    }
    return [operations, answerCorrect];
  };

  return getDataGame();
};

const brainCalcPlay = () => brainGame(description, getQustionAndAnswerGameItems);

export default brainCalcPlay;
