const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSize.addEventListener("input", onSizeChange);

function onSizeChange(event) {
  const fontSizeEl = event.currentTarget.value;
  const style = document.createElement("style");
  style.innerHTML = `
      #text {
        font-size: ${fontSizeEl}px;
      }
    `;
  document.head.appendChild(style);
}
