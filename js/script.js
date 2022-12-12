const form =  document.querySelector('#form');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result')

form.addEventListener('submit',suma);


function suma(event) {
    event.preventDefault();
    result.innerHTML =  parseInt(number1.value) + parseInt(number2.value);
}

