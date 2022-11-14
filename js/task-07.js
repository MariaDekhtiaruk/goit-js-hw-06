const controlInput = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

controlInput.addEventListener(`input`, onFontSize);

function onFontSize(event) {
  console.log(event.target.value);
  text.style.fontSize = `${event.target.value}px`;
}
