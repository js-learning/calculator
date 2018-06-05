let mixed = [];
let currentNumber = '';
let currentSymbol = '';

const numberButtons = document.querySelectorAll('.number');
for (let numberButton of numberButtons) {
    numberButton.addEventListener('click', function (event) {
        const elm = event.target;
        const value = elm.dataset.value;

        if (value) {
            currentNumber += value;
        }

        if (currentSymbol) {
            mixed.push(currentSymbol);
        }

        updateScreen(currentNumber);
    });
}

const operatorButtons = document.querySelectorAll('.operator');
for (let operatorButton of operatorButtons) {
    operatorButton.addEventListener('click', function (event) {
        const elm = event.target;
        const symbol = elm.dataset.symbol;
        if (symbol) {
            const number = currentNumber;
            currentNumber = '';

            if (number) {
                mixed.push(number);
            }

            currentSymbol = symbol;

            updateTopScreen(`${mixed.join(' ')} ${symbol}`);
            updateScreen(currentNumber);
        }
    });
}

const clearEntryButtons = document.querySelectorAll('.clear-entry');
for (let clearEntryButton of clearEntryButtons) {
    clearEntryButton.addEventListener('click', function () {
        currentNumber = '';
        updateScreen(currentNumber);
    });
}

const clearButtons = document.querySelectorAll('.clear');
for (let clearButton of clearButtons) {
    clearButton.addEventListener('click', function () {
        mixed.length = 0;
        currentNumber = '';
        currentSymbol = '';
        updateTopScreen('');
        updateScreen(currentNumber);
    });
}

const backButtons = document.querySelectorAll('.back');
for (let backButton of backButtons) {
    backButton.addEventListener('click', function () {
        if (currentNumber) {
            currentNumber = currentNumber.slice(0, -1);
            updateScreen(currentNumber);
        }
    });
}

const equalButtons = document.querySelectorAll('.equal');
for (let equalButton of equalButtons) {
    equalButton.addEventListener('click', function () {
        if (mixed.length > 1) {
            mixed.push(currentNumber);
            const result = calculation(mixed);
            mixed.length = 0;
            currentNumber = String(result);
            currentSymbol = '';
            updateTopScreen('');
            updateScreen(result);
        }
    });
}