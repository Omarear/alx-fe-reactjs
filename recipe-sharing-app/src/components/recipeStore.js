import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes }),
searchTerm: '',
filteredRecipes: [],
setSearchTerm: (term) => set(state => {
  const newSearchTerm = term;
  return {
    searchTerm: newSearchTerm,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    )
  };
}),
favorites: [],

  // Add a recipe to the favorites array
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),

  // Remove a recipe from the favorites array
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  recommendations: [],

  // Generate recommendations based on the favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));


export default useRecipeStore;