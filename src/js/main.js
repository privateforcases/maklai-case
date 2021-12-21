const form = document.getElementById('form');
const select = document.getElementById('operations');
const firstInput = document.querySelector('.first-value')
const secondInput = document.querySelector('.second-value')


form.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();
  
  let firstValue = +firstInput.value;
  let secondValue = +secondInput.value;
  let operation = select.value;

  if (!firstValue || !secondValue) {
    alert('Bad data')
    return
  }

  let result = getResult(firstValue, secondValue, operation);
  alert(result)
}


function getResult(firstValue, secondValue, operation) {
  let result

  switch (operation) {
    case '+':
      result = firstValue + secondValue
      break
    
    case '-':
      result = firstValue - secondValue
      break

    case '*':
      result = firstValue * secondValue
      break

    case '/':
      result = firstValue / secondValue
      break
  }

  return Math.trunc(result)
}