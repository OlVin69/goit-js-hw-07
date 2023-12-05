const formEl = document.querySelector("input#name-input");

const spanEl = document.querySelector("span#name-output");

formEl.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    // inputValue ? spanEl.textContent = inputValue : spanEl.textContent = "Anonymous";
    spanEl.textContent = inputValue || "Anonymous";
});


