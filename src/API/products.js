import axios from 'axios';

//TRAER TODOS LOS PRODUCTOS
export const getProducts = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: 'http://localhost:5000/productos' };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//EXTRAER DATO POR ID
export const getProductByID = async (id, successCallback, errorCallback) => {
  const options = { method: 'GET', url: `http://localhost:5000/productos/${id}` };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//CREAR UN NUEVO PRODUCTO
export const createProduct = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/productos/',
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//EDITAR PRODUCTO
export const updateProduct = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/productos/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//ELIMINAR PRODUCTO
export const deleteProduct = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/productos/${id}/`,
      headers: { 'Content-Type': 'application/json' },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };