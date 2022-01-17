const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlurCheck);

function onBlurCheck(event) {
  const inputLength = event.currentTarget.value.length;
  if (inputLength > 6) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
}
