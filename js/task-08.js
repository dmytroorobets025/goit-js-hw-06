// const loginForm = document.querySelector(".login-form")
// loginForm.addEventListener("submit", e => handleSubmit(e))
// function handleSubmit(event) {
//     event.preventDefault()
//     const { elements: { email, password } } = event.currentTarget
//     if (email.value.length > 0 && password.value.length > 0) {
//         let newForm = {};
//         newForm.email = email.value
//         newForm.password = password.value
//         console.log(newForm)
//     } else {
//         alert(`all fields must be filled.`)
//     }
// }
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (onEmptyString(email) || onEmptyString(password)) {
        return alert("all fields must be filled");
    }
    const newForm = {
        email,
        password,
    };
    loginForm.reset();
    console.log(newForm);
}
function onEmptyString(str) {
    return !str || 0 === str.length;
}