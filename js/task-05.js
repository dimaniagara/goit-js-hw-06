const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

console.log(nameInput, nameOutput);

nameInput.addEventListener("input", onFormSubmit);
function onFormSubmit(event) {
  event.target.value == ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = event.target.value);
}
