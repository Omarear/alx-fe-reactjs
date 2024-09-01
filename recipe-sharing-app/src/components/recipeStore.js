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
setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export default useRecipeStore;