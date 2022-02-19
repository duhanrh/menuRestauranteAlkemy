import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_DU || "https://backjsonserver.herokuapp.com";

if(baseUrl.trim().slice(-1)!=="/" && baseUrl!=="")
{
  baseUrl = baseUrl +"/";
}

//EXTRAER TODOS LOS PRODUCTOS
export const getRecipes = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}recipes/`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE RECETAS ALEATORIAMENTE
export const getRecipesRandom = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}recipes/`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR ID
export const getRecipeByID = async (id, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}recipes/${id}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR X CAMPO
export const getRecipeByFields = async (campos, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}recipes/?${campos}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR RANGO DE ID
export const getRecipeByAllID = async (rangeIni, rangeFin, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}recipes/?id_gte=${rangeIni}&id_lte=${rangeFin}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//EXTRAER DATOS DE UNA RECETA POR CAMPO
export const getRecipeLike = async (campo, expresion, successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${baseUrl}recipes/?${campo}_like=${expresion}`,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};