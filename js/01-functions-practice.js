//STEP 1
function halfNumber(number) {
    let result = number / 2
    console.log(`Half of ${number} is ${result}.`)
    return result
}
//STEP 2
function squareNumber(number){
    let result = number * number
    console.log(`The result of squaring the number ${number} is ${result}.`)
    return result
}
//STEP 3
function percentOf(number1, number2) {
    let result = (number1/number2)*100
    console.log(`${number1} is ${result}% of ${number2}."`)
}
//STEP 4
function findModulus(number1, number2) {
    let result = number1 % number2
    console.log(`${result} is the modulus of ${number1} and ${number2}.`)
}