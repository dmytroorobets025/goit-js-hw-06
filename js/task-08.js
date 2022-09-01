const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", e => handleSubmit(e))
function handleSubmit(event) {
    event.preventDefault()
    const { elements: { email, password } } = event.currentTarget
    if (email.value.length > 0 && password.value.length > 0) {
        let newForm = {};
        newForm.email = email.value
        newForm.password = password.value
        console.log(newForm)
    } else {
        alert(`все поля должны быть заполнены.`)
    }
}
