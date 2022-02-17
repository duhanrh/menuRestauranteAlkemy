import axios from "axios";
//import dotenv from "dotenv";

//dotenv.config({ path: '../../.env' });
const baseUrl = process.env.REACT_APP_API_END_POINT;
const apiKey = process.env.REACT_APP_API_KEY_END_POINT;

//EXTRAER TODOS LOS PRODUCTOS
export const getRecipes = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}/complexSearch?number=100&apiKey=${apiKey}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE RECETAS ALEATORIAMENTE
export const getRecipesRandom = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}/random?apiKey=${apiKey}&number=21`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR ID
export const getRecipeByID = async (id, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}/${id}/information?apiKey=${apiKey}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR DIFERENTES ID
export const getRecipeByAllID = async (listaIds, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}/informationBulk?ids=${listaIds}&apiKey=${apiKey}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};