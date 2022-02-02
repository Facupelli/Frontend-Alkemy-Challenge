const axios = require("axios");
const  API_KEY  = process.env.REACT_APP_API_KEY;

export const searchRecipe = async() => {
  try {
    const api = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=pasta&titleMatch=pasta&apiKey=${API_KEY}`
    );
    const apiInfo = await api.data.results;
    return apiInfo;
  } catch (e) {
    console.log(e);
  }
};
