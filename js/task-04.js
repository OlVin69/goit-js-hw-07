const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        return alert("All form fields must be filled in");
    }

    const formObject = {
        Email: emailValue,
        Password: passwordValue
    }
    console.log(formObject);
    
  form.reset();
}