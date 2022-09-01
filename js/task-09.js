

const colorElementBody = document.querySelector('.js-change-color');
const changeColorButton = document.querySelector('.change-color')
const span = document.querySelector('.color')
changeColorButton.addEventListener('click', () => selectColor())

function selectColor() {
  const selectedColor = getRandomHexColor();
  span.textContent = `${selectedColor}`;
  colorElementBody.style.background = selectedColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}