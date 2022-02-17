import axios from "axios";
//import dotenv from "dotenv";

//dotenv.config({ path: '../../.env' });
const proxxy = process.env.REACT_APP_PROXY_CORS;//genera error 403 por eso el proxy cors
///console.log("env",process.env.REACT_APP_PROXY_CORS)
// if(proxxy!=="" && proxxy!==null && proxxy!==undefined)
// {
//   proxxy=proxxy+"/"
// }

//const proxxy = process.env.REACT_APP_PROXY_CORS || "https://cors-anywhere.herokuapp.com/";

const baseUrl = process.env.REACT_APP_API_URL_LOGIN;

export const getUserA = (usuario, clave) => {
  axios
    .get(`${proxxy}${baseUrl}/?email=${usuario}&password=${clave}`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
    .then(response => {
      // Success 🎉
      console.log(response.data);
      //alert(response.data)
      //response.data;
    })
    .catch((error) => {
      // Error 😨
      if (error.response) {
        /*
         * La solicitud se realizó y el servidor respondió con un
         * código de estado que cae fuera del rango de 2xx
         */
        console.log("Response data:",error.response.data);
        console.log("Status",error.response.status);
        console.log("Headers",error.response.headers);
      } else if (error.request) {
        /*
         * Se realizó la solicitud pero no se recibió respuesta, `error.request`
         * es una instancia de XMLHttpRequest en el navegador y una instancia
         * de http.ClientRequest en Node.js
         */
        console.log("ERROR:",error.request);
      } else {
        // Algo sucedió al configurar la solicitud y provocó un error
        console.log("ERROR", error.message);
      }
      console.log("Error config",error.config);
    });
};

//EXTRAER DATOS DEL USUARIO
export const getUserTest = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: `${proxxy}${baseUrl}/?email=challenge@alkemy.org&password=react` };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUser = async (usuario, clave, successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: ` ${proxxy}${baseUrl}/?email=${usuario}&password=${clave}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const createUser = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${proxxy}${baseUrl}`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};