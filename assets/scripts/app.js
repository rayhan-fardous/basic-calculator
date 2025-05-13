const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', intialResult, enteredNumber)
    
}

function subtract () {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', intialResult, enteredNumber)
}

function multiply () {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', intialResult, enteredNumber)
}

function divide () {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', intialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);