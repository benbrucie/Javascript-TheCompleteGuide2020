let currentResult = 0;

function getInputNum(){
  return parseInt(userInput.value);
}

function add(){
  let enteredNum = getInputNum();
  let description = `${currentResult} + ${enteredNum}`;
  currentResult = currentResult + parseInt(enteredNum);
  outputResult(currentResult, description);
}

addBtn.addEventListener('click', add);
