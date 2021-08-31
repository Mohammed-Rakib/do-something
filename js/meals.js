// get meal data
const getMealData = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const res = await fetch(url);
    const data = await res.json();
    displayMeals(data.categories)
}
getMealData();
// display meals
const displayMeals = (meals) => {
    const displayDiv = document.getElementById('display-meals');
    meals.map((meal) => {
        const { strCategory, strCategoryDescription, strCategoryThumb } = meal;
        const description = strCategoryDescription.slice(0, 200);
        const div = document.createElement('div');
        div.setAttribute('class', 'col-md-4 col-12 my-3');
        div.innerHTML = `
        <div class="card">
        <img src=${strCategoryThumb} class="card-img-top" alt="...">
        <div class="card-body text-dark">
        <h5 class="card-title">${strCategory}</h5>
        <p class="card-text">${description}</p>
        </div>
        </div>
        `;
        displayDiv.appendChild(div);
    });
};
// display searched meals on UI
const getSearchedMeals = async () => {
    const searchInput = document.getElementById('meal-input');
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    // warningMessage
    const warningMessage = document.getElementById('warning-text');
    // get search input value
    if (searchInputValue == '') {
        warningMessage.style.display = 'block';
    } else {
        warningMessage.style.display = 'none';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
        const res = await fetch(url);
        const data = await res.json();
        displaySearchData(data.meals);
    }
}
// get searched meals
const displaySearchData = (meals) => {
    // warningMessage
    const warningMessage = document.getElementById('warning-text');
    if (meals == null) {
        warningMessage.style.display = 'block';
    } else {
        console.log(meals);
        const displayDiv = document.getElementById('display-meals');
        displayDiv.innerHTML = '';
        meals.map((meal) => {
            const { strMeal, strInstructions, strMealThumb } = meal;
            const description = strInstructions.slice(0, 200);
            const div = document.createElement('div');
            div.setAttribute('class', 'col-md-4 col-12 my-3');
            div.innerHTML = `
        <div class="card">
        <img src=${strMealThumb} class="card-img-top" alt="...">
        <div class="card-body text-dark">
        <h5 class="card-title">${strMeal}</h5>
        <p class="card-text">${description}</p>
        </div>
        </div>
        `;
            displayDiv.appendChild(div);
        })
    }

}
