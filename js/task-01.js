const totalEl = document.querySelectorAll(".item").length;
console.log("Number of categories:", totalEl);

const sublistEl = document.querySelectorAll(".item");

sublistEl.forEach((listEl) => {
  const titleEl = listEl.children[0];
  console.log("Category:", titleEl.textContent);
  const elementsEl = listEl.children[1].children.length;
  console.log("Elements:", elementsEl);
});
