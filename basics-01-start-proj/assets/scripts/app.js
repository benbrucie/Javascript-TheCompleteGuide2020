let currentResult = 0;
let logEntries = [];
let logObject = {};

//get input from input field
function getInputNum(){
  return parseInt(userInput.value);
}

//write operation discription
function writeDescription(operator, firstResult, resultNow){
  const description = `${firstResult} ${operator} ${resultNow}`;
  outputResult(currentResult, description);
}

function add(){
  const enteredNum = getInputNum();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNum;
  writeDescription('+', initialResult, enteredNum);
  logObject = {
    Operation:'Addition',
    FirstOperand: initialResult,
    SecondOperand: enteredNum,
    Operator: '+',
    Result: currentResult
  };
  logEntries.push(logObject);
  console.log(logEntries);
}

function subtract(){
  const enteredNum = getInputNum();
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(enteredNum);
  writeDescription('-', initialResult, enteredNum);
  logObject = {
    Operation:'Subtraction',
    FirstOperand: initialResult,
    SecondOperand: enteredNum,
    Operator: '-',
    Result: currentResult
  };
  logEntries.push(logObject);
  console.log(logEntries);
}

function multiply(){
  const enteredNum = getInputNum();
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(enteredNum);
  writeDescription('*', initialResult, enteredNum);
  logObject = {
    Operation:'Multiplication',
    FirstOperand: initialResult,
    SecondOperand: enteredNum,
    Operator: '*',
    Result: currentResult
  };
  logEntries.push(logObject);
  console.log(logEntries);
}

function divide(){
  const enteredNum = getInputNum();
  const initialResult = currentResult;
  currentResult = currentResult / parseInt(enteredNum);
  writeDescription('/', initialResult, enteredNum);
  logObject = {
    Operation:'Division',
    FirstOperand: initialResult,
    SecondOperand: enteredNum,
    Operator: '/',
    Result: currentResult
  };
  logEntries.push(logObject);
  console.log(logEntries);
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
