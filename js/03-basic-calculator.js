let firstNum
let secondNum
let operation
let flag
// ADD A FUNCTION CALLED CALCULATE
function calculate(x,y,operation) {
    switch (operation){
        case 'add':
            return x + y
        case 'subtract':
            return x - y
        case 'multiply':
            return x * y
        case 'divide':
            return x /y
    }
}
do{
    // COLLECT FIRST NUMBER FROM USER
    firstNum = parseInt(prompt('Enter your first number.'))

    // COLLECT SECOND NUMBER FROM USER
    secondNum = parseInt(prompt('Enter your first number.'))

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt('Enter the operation you want to do?(add/subtract/multiply/divide')
    if(operation === 'add' || operation === 'subtract' || operation === 'multiply' || operation === 'divide'){
        flag = false
    }
    else{
        flag = true
        alert('Must enter valid operation.')
    }
} while (flag)
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
alert(calculate(firstNum,secondNum,operation))