let counterValue = 0;

const counterContainer = document.querySelector("#value");

const incrementListenerBtn = document.querySelector(
  '[data-action="increment"]'
);
incrementListenerBtn.addEventListener("click", onIncrementClick);

const decrementListenerBtn = document.querySelector(
  '[data-action="decrement"]'
);
decrementListenerBtn.addEventListener("click", onDecrementClick);

function onIncrementClick() {
  counterValue++;
  counterContainer.innerHTML = counterValue;
}

function onDecrementClick() {
  counterValue--;
  counterContainer.innerHTML = counterValue;
}
