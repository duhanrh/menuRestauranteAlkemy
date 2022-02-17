import axios from "axios";
//import dotenv from "dotenv";

//dotenv.config({ path: '../../.env' });
const baseUrl = process.env.REACT_APP_BACKEND_DU; //|| "http://localhost:3001/";
console.log("base url", baseUrl)

//EXTRAER TODOS LOS PRODUCTOS
export const getRecipes = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}/recipes/`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE RECETAS ALEATORIAMENTE
export const getRecipesRandom = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}/recipes/`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR ID
export const getRecipeByID = async (id, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}/recipes/${id}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR DIFERENTES ID
export const getRecipeByAllID = async (listaIds, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}/recipes/informationBulk?ids=${listaIds}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};