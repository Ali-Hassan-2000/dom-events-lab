/*-------------------------------- Constants --------------------------------*/
const numberButtons = document.querySelectorAll('.button.number');
const operatorButtons = document.querySelectorAll('.button.operator');
const equalsButton = document.querySelector('.button.equals');
const clearButton = document.querySelector('.button.operator:nth-child(1)');

const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

console.dir(calculator);
console.dir(display);
console.dir(numberButtons);
console.dir(operatorButtons);
console.dir(equalsButton);
console.dir(clearButton);
/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
/*----------------------------- Event Listeners -----------------------------*/
//Number buttons
numberButtons.forEach((button) => {
  button.addEventListener('click', (event) => {

    currentInput += event.target.innerText;
    display.innerText = currentInput;
  
    });
});

//operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    
    const value = event.target.innerText;

    if (value === 'C') {

      currentInput = '';
      operator = '';
      firstOperand = '';
      secondOperand = '';
      display.innerText = '';
      return; // Exit early if 'C' is clicked
    }

    if (currentInput === '' && firstOperand === '') return; // Break if no input
    
    if (firstOperand && operator && currentInput) {
      firstOperand = operate(firstOperand, currentInput, operator);
      display.innerText = firstOperand;
    }
    else {
      firstOperand = currentInput;
    }

    operator = value;
    currentInput = '';
    
  });
}); 
    
//equals button
equalsButton.addEventListener('click', (event) => {
  if(firstOperand && operator && currentInput) {
    secondOperand = currentInput;
    const result = operate(firstOperand, secondOperand, operator);
    display.innerText = result;
    firstOperand = result; // Update firstOperand for further calculations
    currentInput = ''; // Reset currentInput for next input
    operator = ''; // Reset operator for next operation
  } 
});

console.log(event.target.innerText);

/*-------------------------------- Functions --------------------------------*/
function operate(a, b, op) {
  
    a = parseFloat(a); //convert to numbers
    b = parseFloat(b); // convert to numbers
  
    switch (op) {
        case '+': return (a + b).toString();
        case '-': return (a - b).toString();
        case '*': return (a * b).toString();
        case '/': return b !== 0 ? (a / b).toString() : 'D.N.E.';
        default: return '';
    }

}