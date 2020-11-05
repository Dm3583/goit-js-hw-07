const counter = document.getElementById('value');
const incrementBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector("[data-action=decrement]");
let counterValue = parseInt(counter.innerText);

const increment = () => {
    counterValue = counterValue + 1;
    counter.innerText = counterValue;
}

const decrement = () => {
    counterValue = counterValue - 1;
    counter.innerText = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);



