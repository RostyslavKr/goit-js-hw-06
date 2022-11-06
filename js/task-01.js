const catEl = document.querySelector('ul#categories').children.length;
console.log(`Number of categories: ${catEl} `);

const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});