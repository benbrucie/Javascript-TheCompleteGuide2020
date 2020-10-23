let currentResult = 0;

function getInputNum(){
  return parseInt(userInput.value);
}

function writeDescription(operator, firstResult, resultNow){
  const description = `${firstResult} ${operator} ${resultNow}`;
  outputResult(currentResult, description);
}

function add(){
  const enteredNum = getInputNum();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNum;
  writeDescription('+', initialResult, enteredNum);
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
