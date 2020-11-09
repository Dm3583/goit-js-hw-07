const listItem = document.querySelectorAll('.item');
console.log(`В списке ${listItem.length} категории.`);

// Way 1
console.log('Way 1');
listItem.forEach(el => {
    console.log(`Категория: ${el.getElementsByTagName('h2')[0].innerText}`);
    console.log(`Количество элементов: ${el.getElementsByTagName('ul')[0].children.length}`);
});

// Way 2
console.log('Way 2');
listItem.forEach(el => {
    console.log(`Категория: ${el.querySelector('h2').innerText}`);
    console.log(`Количество элементов: ${el.querySelector('ul').children.length}`);
});

// Way 3
console.log('Way 3');

listItem.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.innerText}`);
    console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});

// Way 4
console.log('Way 4');

listItem.forEach(el => {
    console.log(`Категория: ${el.children[0].innerText}`);
    console.log(`Количество элементов: ${el.children[1].children.length}`);
});