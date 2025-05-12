const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', intialResult, enteredNumber)
    
}

function subtract () {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', intialResult, enteredNumber)
}

function multiply () {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', intialResult, enteredNumber)
}

function divide () {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', intialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);