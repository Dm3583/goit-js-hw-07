const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsList = document.getElementById('ingredients');

const items = [];

ingredients.forEach(el => {
    const item = document.createElement('li');
    item.innerText = el;
    items.push(item);
})

ingredientsList.append(...items);