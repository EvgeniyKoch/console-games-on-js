import brainGame from '..';
import generateNum from '../utils';

const generateOperator = (min, max, operationsItems) => {
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return operationsItems[randomIndex];
};

const description = 'What is the result of the expression?';

const getDataGame = () => {
  const operations = ['+', '-', '*'];
  const operandOne = generateNum(0, 100);
  const operandTwo = generateNum(0, 100);
  const operator = generateOperator(0, operations.length - 1, operations);

  let answerCorrect = 0;
  let task = '';

  switch (operator) {
    case '+':
      task = `${operandOne} + ${operandTwo}`;
      answerCorrect = operandOne + operandTwo;
      break;
    case '-':
      answerCorrect = operandOne - operandTwo;
      task = `${operandOne} - ${operandTwo}`;
      break;
    case '*':
      answerCorrect = operandOne * operandTwo;
      task = `${operandOne} * ${operandTwo}`;
      break;
    default:
  }
  return [task, answerCorrect];
};

export default () => brainGame(description, getDataGame);
