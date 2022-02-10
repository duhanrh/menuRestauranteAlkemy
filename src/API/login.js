import axios from "axios";
// // import dotenv from 'dotenv';

// // dotenv.config();

// // const baseURL = process.env.REACT_APP_API_URL_LOGIN;

//SOLUCION CORS
//DEMO: https://cors-anywhere.herokuapp.com/';
//MY HEROKU: https://cors-anywhere.herokuapp.com/';

const proxxy = 'https://cors-anywhere.herokuapp.com/';

export const getUserA = (usuario, clave) => {
  axios
    .get(proxxy+"http://challengee-react.alkemy.org/?email=" + usuario + "&password=" + clave, {
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
    const options = { method: 'GET', url: proxxy+'http://challenge-react.alkemy.org/?email=challenge@alkemy.org&password=react' };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUser = async (usuario, clave, successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: proxxy + 'http://challenge-react.alkemy.org/?email=' + usuario + '&password=' + clave,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const createUser = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://challenge-react.alkemy.org/',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};