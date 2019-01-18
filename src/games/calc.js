import brainGame from '..';
import generateNum from '../utils';

const generateOperator = (min, max, operationsItems) => {
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return operationsItems[randomIndex];
};

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getGameData = () => {
  const operandOne = generateNum(0, 100);
  const operandTwo = generateNum(0, 100);
  const operator = generateOperator(0, operations.length - 1, operations);

  let correctAnswer = '';
  let task;

  switch (operator) {
    case '+':
      task = `${operandOne} + ${operandTwo}`;
      correctAnswer += operandOne + operandTwo;
      break;
    case '-':
      correctAnswer += operandOne - operandTwo;
      task = `${operandOne} - ${operandTwo}`;
      break;
    default:
      correctAnswer += operandOne * operandTwo;
      task = `${operandOne} * ${operandTwo}`;
  }
  return [task, correctAnswer];
};

export default () => brainGame(description, getGameData);
