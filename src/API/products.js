import axios from "axios";

let baseUrl = process.env.REACT_APP_API_END_POINT || "";
let apiKey = process.env.REACT_APP_API_KEY_END_POINT;

if(baseUrl.trim().slice(-1)!=="/" && baseUrl!=="")
{
  baseUrl = baseUrl +"/";
}

//EXTRAER TODOS LOS PRODUCTOS
export const getRecipes = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}complexSearch?addRecipeInformation=true&number=100&apiKey=${apiKey}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE RECETAS ALEATORIAMENTE
export const getRecipesRandom = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}random?apiKey=${apiKey}&number=21`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR ID
export const getRecipeByID = async (id, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}${id}/information?apiKey=${apiKey}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR CAMPO
export const getRecipeLike = async (campo, expresion, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}complexSearch?addRecipeInformation=true&${campo}=${expresion}&number=100&apiKey=${apiKey}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};