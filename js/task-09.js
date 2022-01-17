/*function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}*/

const colorChangeBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

colorChangeBtn.addEventListener("click", onBodyChangeColor);

function onBodyChangeColor() {
  const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const style = document.createElement("style");
  style.innerHTML = `
      body {
        background-color: ${bgColor};
      }
    `;
  document.head.appendChild(style);

  colorValue.textContent = bgColor;
}
