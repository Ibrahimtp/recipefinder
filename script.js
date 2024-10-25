
// Sample recipe data 
const recipes = [
    {
        title: "Spaghetti Carbonara",
        image: "https://example.com/spaghetti.jpg",
        description: "A classic Italian pasta dish with creamy sauce, bacon, and Parmesan cheese.",
    },
    {
        title: "Vegetable Stir Fry",
        image: "https://example.com/stirfry.jpg",
        description: "A healthy mix of veggies with a delicious stir-fry sauce.",
    },
    {
        title: "Chicken Curry",
        image: "https://example.com/chickencurry.jpg",
        description: "A spicy and flavorful chicken curry with rice.",
    },
];

// Populate the recipe list
const recipeList = document.getElementById('recipe-list');

function displayRecipes(filteredRecipes) {
    recipeList.innerHTML = "";
    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" />
            <div class="recipe-content">
                <h2 class="recipe-title">${recipe.title}</h2>
                <p class="recipe-description">${recipe.description}</p>
            </div>
        `;
        recipeList.appendChild(recipeCard);
    });
}

// Display all recipes initially
displayRecipes(recipes);

// Search functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
});
