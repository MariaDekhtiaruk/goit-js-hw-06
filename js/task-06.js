const input = document.querySelector(`input`);
input.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
  const correctLength = event.target.attributes[`data-length`].value;
  const inputValue = event.currentTarget.value;
  if (inputValue.length != correctLength) {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  } else {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  }
}
