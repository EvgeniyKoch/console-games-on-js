import {
  intro, attempts, nameRequest, randomNumber, questionAnswer, brainGame,
} from './gameEngine';

intro('What is the result of the expression?');
const name = nameRequest();

const brainCalcPlay = (attempt) => {
  if (attempt === 0) {
    console.log(`Congratulations, ${name} !!`);
    return;
  }

  const operandOne = randomNumber();
  const operandTwo = randomNumber();
  const plus = `${operandOne} + ${operandTwo}`;
  const minus = `${operandOne} - ${operandTwo}`;
  const multiply = `${operandOne} * ${operandTwo}`;
  const operations = [plus, multiply, minus];

  const generateOperator = (min, max, operationsArr) => {
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    return operationsArr[randomIndex];
  };
  const getRandomOperations = generateOperator(0, operations.length - 1, operations);

  const questionOperation = () => {
    console.log(`Question: ${getRandomOperations}`);
    return questionAnswer();
  };

  const answer = questionOperation();
  let answerCorrect = 0;

  switch (getRandomOperations) {
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

  brainGame(name, answer, answerCorrect);

  brainCalcPlay(attempt - 1);
};

brainCalcPlay(attempts);

export default brainCalcPlay;
