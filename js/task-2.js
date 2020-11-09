const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsList = document.getElementById('ingredients');

// Way 1

const items = [];

ingredients.forEach(el => {
    const item = document.createElement('li');
    item.textContent = el;
    items.push(item);
})

ingredientsList.append(...items);

// Way 2

const ingredientsList2 = document.getElementById('ingredients2');

const render = e => {
    const item = document.createElement('li');
    item.textContent = e;
    return item;
}

const renderList = ingredients.map(el => render(el));
ingredientsList2.append(...renderList);