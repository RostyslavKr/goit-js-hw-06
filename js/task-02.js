const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const elementsList = ingredients.map( ingredient => {
  const newTag = document.createElement('li');
  newTag.textContent = ingredient;
  newTag.classList.add('item');
  return newTag;
});

ingredientsEl.append(...elementsList);

// for (const obj of ingredients) {
//   const newTag = document.createElement('li');
//   newTag.textContent = obj;
//   newTag.classList.add('item');
//   ingredientsEl.append(newTag);
// }
