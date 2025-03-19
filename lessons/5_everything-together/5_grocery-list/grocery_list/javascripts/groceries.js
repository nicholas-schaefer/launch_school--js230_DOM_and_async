document.addEventListener("DOMContentLoaded", (event) => {
  let form = document.querySelector("#groceriesForm");
  let nameInput = document.querySelector("#name");
  let quantityInput = document.querySelector('#quantity');
  let flashFeedback = document.querySelector('#flashFeedback');
  let groceryList = document.querySelector('#grocery-list');


  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const errors = [];
    flashFeedback.innerHTML = "";

    const quantityInt = Number.parseInt(quantityInput.value);
    if(Number.isNaN(quantityInt) || quantityInt < 1) {
      errors.push("Quantity must be a positive Integer");
    }
    const itemName = nameInput.value.trim();
    if (itemName.length === 0) {
      errors.push("Item name is required");
      nameInput.value = "";
    }

    const hasErrors = errors.length > 0;

    if (hasErrors) {
      let ul = document.createElement('ul');

      errors.forEach((error) => {
        const li = document.createElement('li');
        li.textContent = error;
        ul.appendChild(li);
      })

      flashFeedback.appendChild(ul);
      return;
    }

    const li = document.createElement('li');
    li.textContent = `${quantityInt} ${itemName}`;
    groceryList.append(li);

    const p = document.createElement('p')
    p.textContent = "Entry successfully added!";

    flashFeedback.appendChild(p)

    form.reset();
  })
})