const inpField = document.querySelector('#controls>input');

console.log(inpField);

const createBtn = document.querySelector('[data-action=render]');

console.log(createBtn);

const clearBtn = document.querySelector('[data-action=destroy]');

console.log(clearBtn);
const createBoxes = (amount) => { };
const destroyBoxes = () => { };

createBtn.addEventListener('click', () => {
    let boxesCount = parseInt(inpField.value);

    console.log(boxesCount);
})

clearBtn.addEventListener('click', () => {
    inpField.value = '';

    console.log(inpField.value, 'clear');
})

