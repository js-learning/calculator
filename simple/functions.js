function addition(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function calculation(mixed) {
    const values = [], operations = [];

    mixed.forEach(function (item) {
        switch (item) {
            case '+':
                operations.push(addition);
                break;
            case '-':
                operations.push(substraction);
                break;
            case 'x':
                operations.push(multiplication);
                break;
            case '/':
                operations.push(division);
                break;
            default:
                values.push(Number(item));
                break;
        };
    });

    let result = values[0];
    for (let i = 1; i < values.length; i++) {
        const value = values[i];
        if (operations[i - 1]) {
            const operation = operations[i - 1];
            result = operation(result, value);
        }
    }

    return result;
}

const screen = document.getElementById('screen');
const topScreen = document.getElementById('topScreen');

function updateScreen(number) {
    screen.innerText = number;
}

function updateTopScreen(number) {
    topScreen.innerText = number;
}