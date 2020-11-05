const inp = document.querySelector('#name-input');

const nameSpan = document.querySelector("#name-output");

inp.addEventListener('input',
    () => nameSpan.innerText = inp.value === "" ? "незнакомец" : inp.value);