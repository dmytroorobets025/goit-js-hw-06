

const newSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
newSizeControl.addEventListener("input", e => inputHandle(e))

function inputHandle(e) {
    textSize.style.fontSize = e.target.value + 'px'
}