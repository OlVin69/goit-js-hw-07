function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
buttonEl.addEventListener("click", handleClick);
function handleClick() {
  const randomColor = getRandomHexColor()
  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = `${randomColor}`;
 }