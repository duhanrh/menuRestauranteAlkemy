import axios from "axios";

let proxxy = process.env.REACT_APP_PROXY_CORS || "";//la conexion me genera genera error 403 por eso el proxy cors
if(proxxy.trim().slice(-1)!=="/" && proxxy!=="")
{
  proxxy = proxxy +"/";
}

let baseUrl = process.env.REACT_APP_API_URL_LOGIN;
if(baseUrl.trim().slice(-1)!=="/" && baseUrl!=="")
{
  baseUrl = baseUrl +"/";
}

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
    const options = { method: 'GET', url: `${proxxy}${baseUrl}?email=challenge@alkemy.org&password=react` };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUserByGet = async (usuario, clave, successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: ` ${proxxy}${baseUrl}?email=${usuario}&password=${clave}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUserByPost = async (usuario, clave, successCallback, errorCallback) => {
  const data = {
    "email":usuario,
    "password":clave,
  }
  const options = {
    method: 'POST',
    url: ` ${proxxy}${baseUrl}`,
    headers: {'Content-Type': 'application/json'},
    data,
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