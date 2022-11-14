function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxNumber = document.querySelector(`[type = 'number']`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const boxes = document.querySelector(`#boxes`);

createBtn.addEventListener(`click`, () =>
  createBoxes(boxNumber.value)
);

destroyBtn.addEventListener(`click`, () => (boxes.innerHTML = ``));

function createBoxes(amount) {
  let width = 20;
  let height = 20;
  for (let i = 0; i <= amount; i += 1) {
    width += 10;
    height += 10;
    const element = document.createElement(`div`);
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.background = getRandomHexColor();
    boxes.appendChild(element);
  }
}
