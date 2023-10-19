// ADD A FUNCTION CALLED CALCULATE
function calculate(number1, number2, operation) {
    switch(operation) {
        case 'add':
            return number1 + number2
        case 'subtract':
            return number1 - number2
        case 'multiply':
            return number1 * number2
        case 'divide':
            return number1 / number2
        default:
            return 0;
    }
}

function enterData() {
    const vars = ['add', 'subtract', 'multiply', 'divide']
    let number1;
    let number2;
    let operation;
    let flag = true;
    do {
        // COLLECT FIRST NUMBER FROM USER
        number1 = parseInt(prompt("Enter number1"))
        // COLLECT SECOND NUMBER FROM USER
        number2 = parseInt(prompt("Enter number2"))
        // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
        operation = prompt("Enter operation: add, subtract, multiply or divide")
        if (vars.includes(operation)) {
            flag = false
        } else {
            enterData()
        }
    } while (flag)

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    let result = calculate(number1, number2, operation)
    alert(`The result is ${result}`)
}
enterData();







