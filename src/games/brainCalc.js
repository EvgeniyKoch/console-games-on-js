import brainGame from '..';

const description = 'What is the result of the expression?';

let operandOne = 0;
let operandTwo = 0;
let plus;
let minus;
let multiply;

const randomValue = () => {
  operandOne = Math.floor(Math.random() * 100);
  operandTwo = Math.floor(Math.random() * 100);
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

const funcCorrectAnswer = (value) => {
  let answerCorrect = 0;
  switch (value) {
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
  return answerCorrect;
};

const brainCalcPlay = () => brainGame(description, funcCorrectAnswer, randomValue);

export default brainCalcPlay;
