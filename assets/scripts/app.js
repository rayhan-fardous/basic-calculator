const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculationResult(calculationType) {
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' 
    ) {
        return;
    }
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator, intialResult, enteredNumber);
    writeToLog(calculationType, intialResult, enteredNumber, currentResult);
}

function add() {
    calculationResult('ADD');
}

function subtract () {
    calculationResult('SUBTRACT');
}

function multiply () {
    calculationResult('MULTIPLY')
}

function divide () {
    calculationResult('DIVIDE');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);