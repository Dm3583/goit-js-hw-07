const inpField = document.querySelector('#controls>input');

// console.log(inpField);

const createBtn = document.querySelector('[data-action=render]');

// console.log(createBtn);

const clearBtn = document.querySelector('[data-action=destroy]');

const boxes = document.getElementById('boxes');

// console.log(boxes);
// console.log(clearBtn);

const randomColor = () => Math.floor(Math.random() * 256);

const boxesArr = [];

const createBoxes = (amount) => {

    let size = 30;
    for (let i = 0; i < amount; i += 1) {
        let box = document.createElement('div');
        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.borderWidth = 3 + 'px';
        box.style.borderStyle = 'solid';
        box.style.borderColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
        boxesArr.push(box);
        size += 10;
    }
    return boxesArr;
};
const destroyBoxes = () => { };

createBtn.addEventListener('click', () => {

    const boxesCount = parseInt(inpField.value);
    // console.log(boxesCount);

    createBoxes(boxesCount);
    boxes.append(...boxesArr);
    inpField.value = '';
});

clearBtn.addEventListener('click', () => {
    inpField.value = '';
    boxesArr.splice(0, boxesArr.length)
    boxes.innerHTML = '';

    // console.log(boxesArr);
    // console.log( 'clear');
});



