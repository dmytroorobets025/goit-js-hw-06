

const refs = {
    inputRef: document.querySelector("#validation-input"),
};
refs.inputRef.addEventListener("blur", (event) => {
    let inputText = event.currentTarget.value;

    if (inputText.length === +refs.inputRef.dataset.length) {
        refs.inputRef.classList.remove("invalid");
        return refs.inputRef.classList.add("valid");
    } else {
        refs.inputRef.classList.remove("valid");
        return refs.inputRef.classList.add("invalid");
    }
});
