const colorBtn = document.querySelector(`.change-color`);
const colorSpan = document.querySelector(`.color`);
const body = document.querySelector(`body`);

colorBtn.addEventListener(`click`, onChangeColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onChangeColor(event) {
  const randomColor = getRandomHexColor();
  colorSpan.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}
