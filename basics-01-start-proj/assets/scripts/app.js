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

function writeLog(operation, fOperand, sOperand, operator, result){
  const logEntry = {
    Operation: operation,
    FirstOperand: fOperand,
    SecondOperand: sOperand,
    Operator: operator,
    Result: result
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculation(calculationType){
  const enteredNum = getInputNum();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === 'Addition'){
    currentResult = currentResult + enteredNum;
    mathOperator = '+';
  } else if (calculationType === 'Subtraction'){
    currentResult = currentResult - parseInt(enteredNum);
    mathOperator = '-';
  } else if (calculationType === 'Multiplication'){
    currentResult = currentResult * parseInt(enteredNum);
    mathOperator = '*';
  } else {
    currentResult = currentResult / parseInt(enteredNum);
    mathOperator = '/';
  }
  writeDescription(mathOperator, initialResult, enteredNum);
  writeLog(calculationType, initialResult, enteredNum, mathOperator, currentResult);
}

function add(){
  calculation('Addition');
}

function subtract(){
  calculation('Subtraction');
}

function multiply(){
  calculation('Multiplication');
}

function divide(){
  calculation('Division');
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
