import axios from "axios";

const REACT_APP_API_KEY = "f7326282fadb4e05a7aaa703edb1b0a7";

//EXTRAER TODOS LOS PRODUCTOS
export const getRecipes = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: ` https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${REACT_APP_API_KEY}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE RECETAS ALEATORIAMENTE
export const getRecipesRandom = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: ` https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=21`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR ID
export const getRecipeByID = async (id, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: ` https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_APP_API_KEY}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR DIFERENTES ID
export const getRecipeByAllID = async (listaIds, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: ` https://api.spoonacular.com/recipes/informationBulk?ids=${listaIds}&apiKey=${REACT_APP_API_KEY}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};