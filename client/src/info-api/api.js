const axios = require("axios");
const API_KEY = process.env.REACT_APP_API_KEY;

export const searchRecipe = async (values, count = 0) => {
  try {
    const title = values.title;

    console.log('COUNT', count)

    const offset = count * 12;

    const api = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&titleMatch=${title}&number=12&offset=${offset}&apiKey=${API_KEY}`
    );
    const apiInfo = await api.data.results;

    if(apiInfo.length === 0){
      return 'no plates founded'
    }

    return apiInfo;
  } catch (e) {
    console.log(e);
  }
};

export const getRecipeById = async (id) => {
  try {
    const recipe = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
    );

    const recipeInfoNeeded = (({
      vegan,
      glutenFree,
      cheap,
      healthScore,
      id,
      title,
      readyInMinutes,
      image,
      cuisines,
      dishTypes,
      pricePerServing,
    }) => ({
      vegan,
      glutenFree,
      cheap,
      healthScore,
      id,
      title,
      readyInMinutes,
      image,
      cuisines,
      dishTypes,
      pricePerServing,
    }))(recipe.data);

    return recipeInfoNeeded;
  } catch (e) {
    console.log(e);
  }
};


