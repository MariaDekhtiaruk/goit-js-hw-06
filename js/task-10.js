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
  const boxList = [];
  for (let i = 0; i < amount; i += 1) {
    const width = 30 + 10 * i;
    const height = 30 + 10 * i;
    const element = document.createElement(`div`);
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.background = getRandomHexColor();
    element.style.border = `1px solid red`;
    boxList.push(element);
  }
  boxes.append(...boxList);
}
