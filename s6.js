function calculate(num1, num2, callbackFunction){
    return callbackFunction(num1, num2);
}

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function minus(num1, num2){
    return num1 - num2;
}

console.log(calculate(10, 2, add));

console.log(calculate(10, 2, multiply));

console.log(calculate(10, 2, divide));

console.log(calculate(10, 2, minus));