const inputLabel = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

inputLabel.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameLabel.textContent = event.currentTarget.value;
}
