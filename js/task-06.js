function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("[data-create]")
const buttonDestroy = document.querySelector("[data-destroy]")
const boxesContainer = document.querySelector("div#boxes");
const inputEl = document.querySelector("input");

function createBoxes(amount) {
    if (amount >= 1 && amount <= 100) {   
      let boxSize = 30;
      const items = [];
      for (let i = 0; i < amount; i+=1) {
        const box = document.createElement("div");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxSize += 10;
        items.push(box)
      }
      boxesContainer.append(...items)
    } 
};

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
};
  
function handleCreate() {
  destroyBoxes();
    const amount = Number(inputEl.value);
    createBoxes(amount);
    inputEl.value = '';
};

buttonCreate.addEventListener("click",  handleCreate); 

buttonDestroy.addEventListener("click", destroyBoxes);

  