

const removeBtn = document.querySelector(".js-remove-btn");
const targetBtn = document.querySelector(".js-target-btn");
const addBtn = document.querySelector(".js-add-btn");

addBtn.addEventListener('click', () => handelButton())

function handelButton() {
    targetBtn.innerText = Number(targetBtn.innerText) + 1
}

removeBtn.addEventListener('click', () => handelRemoveButton())
function handelRemoveButton() {
    targetBtn.innerText = Number(targetBtn.innerText) - 1
}