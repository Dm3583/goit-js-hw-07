const inpField = document.querySelector('#controls>input');

const createBtn = document.querySelector('[data-action=render]');

const clearBtn = document.querySelector('[data-action=destroy]');

const boxes = document.getElementById('boxes');

const randomColor = () => Math.floor(Math.random() * 256);

const boxesArr = [];

const createBoxes = (amount) => {
    let size = 30;
    for (let i = 0; i < amount; i += 1) {
        let box = document.createElement('div');
        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.border = `3px solid rgb(${randomColor()},${randomColor()},${randomColor()})`
        boxesArr.push(box);
        size += 10;
    }
    boxes.append(...boxesArr);
    inpField.value = '';
};

const destroyBoxes = () => {
    inpField.value = '';
    boxesArr.splice(0, boxesArr.length)
    boxes.innerHTML = '';
};

createBtn.addEventListener('click', () => {
    const boxesCount = Number(inpField.value);
    createBoxes(boxesCount);
});

clearBtn.addEventListener('click', destroyBoxes);



