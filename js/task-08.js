const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  console.log(formEl);

  const email = formEl.email.value;
  const password = formEl.password.value;

  const formData = {
    email,
    password,
  };
  console.log(formData);

  if (email === "" || password === "") {
    alert`Please fill all the fields`;
  }

  console.log(formData);
  form.reset();
}
