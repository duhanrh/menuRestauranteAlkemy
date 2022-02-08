import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();

// const baseURL = process.env.REACT_APP_API_URL_LOGIN;

export const getUser = (usuario, clave) => {
  
  axios
    .get("http://challenge-react.alkemy.org/?email="+usuario+"&password="+clave)
    .then((response) => {
      // Success 🎉
      console.log(response);
    })
    .catch((error) => {
      // Error 😨
      if (error.response) {
        /*
         * La solicitud se realizó y el servidor respondió con un
         * código de estado que cae fuera del rango de 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * Se realizó la solicitud pero no se recibió respuesta, `error.request`
         * es una instancia de XMLHttpRequest en el navegador y una instancia
         * de http.ClientRequest en Node.js
         */
        console.log(error.request);
      } else {
        // Algo sucedió al configurar la solicitud y provocó un error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const decodeToken = {}