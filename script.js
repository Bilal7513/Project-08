const search = document.getElementById('search');
const submit = document.getElementById('submit');
const genetrate = document.getElementById('genetrate');
const reasultsHeading = document.getElementById('results-heading');
const meals = document.getElementById('meals');
const selectedMeal = document.getElementById('selected-meal');

function searchMeal(e){
    e.preventDefault();
    const searchText = search.value;
    if(searchText.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            reasultsHeading.innerHTML = `<h2>Search results for ${searchText}</h2>`;
            if(data.meals === null){
                reasultsHeading.innerHTML = `<h2>No result found kor ${searchText}</h2>`;
            } else{
                meals.innerHTML = data.meals.map(meal => `
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>    
                    <div class="meal-info" data-mealID="${meal.idmeal}">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
                `)
                .join('')
            }
        });
        search.value = '';
        
    } else{
        alert('Please enter search keyword');
    }
};


submit.addEventListener('submit', searchMeal);