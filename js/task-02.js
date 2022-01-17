const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingridientsEl = document.querySelector("#ingredients");
const ElementsEl = ingredients.map((option) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("item");
  listItemEl.textContent = option;
  return listItemEl;
});
ingridientsEl.append(...ElementsEl);
