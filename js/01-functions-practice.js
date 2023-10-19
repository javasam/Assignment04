//STEP 1
let number = 5
function halfNumber(number) {
    let result = parseInt(number) / 2
    console.log(`Half of ${number} is ${result}`)
    return result
}
halfNumber(number);

//STEP 2
function squareNumber(number) {
    let result = parseInt(number) * parseInt(number)
    console.log(`The result of squaring the number ${number} is ${result}`)
    return result;
}
squareNumber(number)

//STEP 3
function percentOf(number1, number2) {
    let result = parseInt(number1) / parseInt(number2) * 100
    console.log(`${number1} is ${result}% of ${number2}`)
}
let number1 = 4
let number2 = 10
percentOf(number1, number2)

//STEP 4
function findModulus(number1, number2) {
    let result = parseInt(number2) % parseInt(number1)
    console.log(`${result} is the modulus of ${number2} and ${number1}`)
    return result
}
findModulus(number1, number2)
//STEP 5