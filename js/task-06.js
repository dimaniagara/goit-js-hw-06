const valInEl = document.getElementById("validation-input");
const inputLength = valInEl.getAttribute("data-length");

valInEl.addEventListener("blur", checkVal);

function checkVal(input) {
  input.currentTarget.value.length !== parseInt(inputLength)
    ? (valInEl.classList = "invalid")
    : (valInEl.classList = "valid");
}
