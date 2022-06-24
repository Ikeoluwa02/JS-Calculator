const number1 = parseFloat(prompt( 'Enter first number: '))

const operator = prompt('Enter Operator ( either +, -, * or /): ')
const number2 = parseFloat(prompt('Enter second number: '))


if (operator == '+') {
    result = number1 + number2;
}

else if (operator == '-') {
    result= number1 - number2;
}

else if (operator == '*') {
    result= number1 * number2;
}

else if (operator == '/'){
    result = number1 / number2;
}
else {
    alert("Input a valid response!")
}
alert(result)