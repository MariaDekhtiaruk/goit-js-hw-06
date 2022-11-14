const decrementBtn = document.querySelector(
  `[data-action="decrement"]`
);
const incrementBtn = document.querySelector(
  `[data-action="increment"]`
);
const valueSpan = document.querySelector(`#value`);

let counter = 0;

decrementBtn.addEventListener(`click`, () => {
  counter -= 1;
  valueSpan.textContent = counter;
});

incrementBtn.addEventListener(`click`, () => {
  counter += 1;
  valueSpan.textContent = counter;
});
