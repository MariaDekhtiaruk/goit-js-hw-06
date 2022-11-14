const nameLabel = document.querySelector(`#name-output`);
const nameInput = document.querySelector(`#name-input`);

nameInput.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  let value = event.currentTarget.value;
  if (value === '') {
    value = 'Anonymous';
  }
  nameLabel.textContent = value;
}
