const listItem = document.querySelectorAll('.item');
console.log(`В списке ${listItem.length} категории.`);

listItem.forEach(el => {
    console.log(`Категория: ${el.getElementsByTagName('h2')[0].innerText}`);
    console.log(`Количество элементов: ${el.getElementsByTagName('ul')[0].children.length}`);
});