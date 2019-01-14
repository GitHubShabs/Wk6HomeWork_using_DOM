document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})


const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const foodListItem = createFoodListItem(event.target);
  const foodList = document.querySelector('#food-list');
  foodList.appendChild(foodListItem);

  event.target.reset();
}


const createFoodListItem = function (form) {
  const foodListItem = document.createElement('li');
  foodListItem.classList.add('food-list-item');

  const meal = document.createElement('h2');
  meal.textContent = form.meal.value;
  foodListItem.appendChild(meal);

  const country = document.createElement('h3');
  country.textContent = form.country.value;
  foodListItem.appendChild(country);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  foodListItem.appendChild(category);




  return foodListItem;
}

const handleDeleteAllClick = function (event) {
  const foodList = document.querySelector('#food-list');
  foodList.innerHTML = '';
}
