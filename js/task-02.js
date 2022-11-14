const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector(`#ingredients`);
const makeIngList = ingredients.map((ingredient) => {
  const elementLi = document.createElement('li');
  elementLi.textContent = ingredient;
  listEl.appendChild(elementLi);
  return elementLi;
});
