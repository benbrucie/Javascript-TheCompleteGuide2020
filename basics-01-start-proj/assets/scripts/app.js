let currentResult = 0;
let logEntries = [];

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
  logEntries.push(enteredNum);
  console.log(logEntries);
}

function subtract(){
  const enteredNum = getInputNum();
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(enteredNum);
  writeDescription('-', initialResult, enteredNum);
}

function multiply(){
  const enteredNum = getInputNum();
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(enteredNum);
  writeDescription('*', initialResult, enteredNum);
}

function divide(){
  const enteredNum = getInputNum();
  const initialResult = currentResult;
  currentResult = currentResult / parseInt(enteredNum);
  writeDescription('/', initialResult, enteredNum);
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
