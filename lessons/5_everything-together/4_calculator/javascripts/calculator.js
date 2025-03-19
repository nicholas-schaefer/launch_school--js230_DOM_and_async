function add(...addends){
  return addends.reduce((sum, addend) => sum + addend, 0);
}

function subtract(...ints){
  return ints.reduce((minuend, subtrahend) => minuend - subtrahend);
}

function multiply(...factors){
  return factors.reduce((product, factor) => product * factor, 1);
}

function divide(...ints){
  return ints.reduce((dividend, divisor) => {
    // if(divisor === 0) throw new Error('')
    return dividend / divisor;
  });
}





function calculate(num1, operator, num2){
  let solution;
  switch (operator){
    case "+":
      solution = add(num1, num2);
      break;
    case "-":
      solution = subtract(num1, num2);
      break;
    case "*":
      solution = multiply(num1, num2);
      break;
    case "/":
      solution = divide(num1, num2);
      break;
  }
  return solution;
}


document.addEventListener("DOMContentLoaded", (event)=>{
  let calculatorForm = document.querySelector('#calculatorForm');

  calculatorForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const firstNumberInputEl = document.querySelector('input[name="first-number"]');
    const secondNumberInputEl = document.querySelector('input[name="second-number"]');
    const [num1, num2] = [firstNumberInputEl, secondNumberInputEl].map((input) => parseInt(input.value, 10));

    const operatorSelectEl = document.querySelector('#operator')
    const operatorVal = operatorSelectEl.value;
    const solution = calculate(num1, operatorVal, num2);

    const resultEl = document.querySelector('#result');
    resultEl.textContent = Number.isFinite(solution) ? solution : "Division by 0 is not allowed"


  })
})