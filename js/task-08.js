const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const emailEl = formElements.email.value;
  const passwordEl = formElements.password.value;

  if (emailEl.value == "" || passwordEl.value == "") {
    alert("Fill in all fields");
  }

  let results = {
    email: emailEl,
    password: passwordEl,
  };
  console.log(results);
  form.reset();
}
