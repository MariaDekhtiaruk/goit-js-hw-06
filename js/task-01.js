const ulRef = document.querySelectorAll('li.item');
console.log(`Number of categories: ${ulRef.length}`);

ulRef.forEach((liItem) => {
  const category = liItem.querySelector(`h2`).textContent;
  const liLength = liItem.querySelectorAll(`li`).length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${liLength}`);
});
